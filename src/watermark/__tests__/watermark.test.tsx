import React from 'react';
import { render } from '@test/utils';
import Watermark from '../Watermark';

describe('Watermark 组件测试', () => {
  function renderWatermark(watermark) {
    const { container } = render(watermark);
    return container.firstChild;
  }

  test('base', async () => {
    const watermark = renderWatermark(
      <Watermark watermarkContent={{ text: '@水印' }} y={100}>
        <div style={{ height: 300 }}></div>
      </Watermark>,
    );
    expect(watermark).toHaveClass('t-watermark');
    expect(watermark.lastChild).toHaveStyle({ 'background-repeat': 'repeat' });
  });
});
