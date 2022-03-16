/**
 * 针对处理多个组件属性同名，而 attributes.json 中只能存一个属性，
 * 导致最后得到的类型错误（vetur 的 attributes.json 问题）
 */
export default {
  picker: {
    mode: {
      description: 'selector 普通选择器, multiSelector 多列选择器, time 时间选择器, date 日期选择器, region 省市区选择器',
      type: 'String',
      options: ['selector', 'multiSelector', 'time', 'date', 'region']
    }
  },
  image: {
    mode: {
      description: '图片裁剪、缩放的模式',
      type: 'String',
      options: ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
    }
  },
  'live-player': {
    mode: {
      description: 'live（直播），RTC（实时通话，该模式时延更低）',
      type: 'String',
      options: ['live', 'RTC']
    }
  },
  'live-pusher': {
    mode: {
      description: '推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。',
      type: 'String',
      options: ['SD', 'HD', 'FHD']
    }
  }
} as Record<string, Record<string, { description: any; type: any; options: any; }>>
