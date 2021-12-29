import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Space } from 'antd';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useUnmount } from 'ahooks';

gsap.registerPlugin(Draggable);

import type { Path, Svg } from '@svgdotjs/svg.js';
import { makeSvgBoard } from '@/utils/svg';
import styles from './index.module.less';

export default function Draw() {
  const svgDrawRef = useRef<Svg>();
  const pencilPathRef = useRef<Path>();
  const pencilRef = useRef<Draggable>();

  useUnmount(() => {
    console.log('unmount Draw');
  });

  return (
    <PageContainer breadcrumbRender={false}>
      <Card
        style={{ height: 'calc(100vh - 48px - 72px - 24px - 24px)' }}
        bodyStyle={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
          ref={(ref) => {
            console.log('callback of svg container', ref);
            if (ref) {
              const { svgDraw, pencilPoint } = makeSvgBoard(ref, { grid: true });

              svgDrawRef.current = svgDraw;

              const pencilPath = svgDraw
                .path()
                .stroke({
                  width: 2,
                  color: '#000',
                  linecap: 'round',
                  linejoin: 'round',
                })
                .fill('none');
              pencilPathRef.current = pencilPath;

              if (pencilRef.current) {
                // 避免热更新导致的问题
                pencilRef.current.kill();
              }
              pencilRef.current = new Draggable(pencilPoint.node, {
                bounds: svgDraw.node,
                trigger: svgDraw.node,
                allowContextMenu: true,
                allowEventDefault: true,
                cursor: 'crosshair',
                onPress(event: MouseEvent) {
                  const { offsetX: x, offsetY: y } = event;
                  pencilPath.plot(pencilPath.plot().concat(['M', x, y]));

                  gsap.set(pencilPoint.node, { x, y });
                  this.update();
                },
                onDrag() {
                  const x = this.endX;
                  const y = this.endY;
                  pencilPath.plot(pencilPath.plot().concat(['L', x, y]));
                  this.update();
                },
              });
            }
          }}
        />
        <div className={styles.toolbar}>
          <Space>
            <Button onClick={() => pencilPathRef.current?.plot([])}>Clear</Button>
          </Space>
        </div>
      </Card>
    </PageContainer>
  );
}
