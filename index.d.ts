import type {
  DefineComponent,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  ExtractPropTypes,
  EmitsOptions,
} from "vue3";

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;
type TComponent<
  P extends Record<string, any>,
  E extends EmitsOptions
> = DefineComponent<
  {},
  {},
  {},
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  E,
  string,
  PublicProps,
  Readonly<ExtractPropTypes<P>>
>;

/* ---- 通用事件对象 ---- */

/**
 * @desc 基础事件对象
 */
type TBaseEvent = {
  /**
   * @desc 事件类型
   */
  type: string;
  /**
   * @desc 事件生成时的时间戳
   */
  timeStamp: number;
  /**
   * @desc 触发事件的组件的一些属性值集合
   */
  target: {
    /**
     * @desc 事件源组件的id
     */
    id: string;
    /**
     * @desc 事件源组件上由 data- 开头的自定义属性组成的集合
     */
    dataset: Record<string, any>;
  };
  /**
   * @desc 当前组件的一些属性值集合
   */
  currentTarget?: {
    /**
     * @desc 当前组件的id
     */
    id: string;
    /**
     * @desc 当前组件上由data-开头的自定义属性组成的集合
     */
    dataset: Record<string, any>;
  };
  /**
   * @desc 事件标记数据
   */
  mark?: Record<string, any>;
};

/**
 * @desc 自定义事件对象
 */
type TCustomEvent = TBaseEvent & {
  /**
   * @desc 额外的信息
   */
  detail: Record<string, any>;
};

/**
 * @desc 触摸事件对象
 */
type TTouchEvent = TBaseEvent & {
  /**
   * @desc 触摸事件，当前停留在屏幕中的触摸点信息的数组
   */
  touches: {
    /**
     * @desc 触摸点的标识符
     */
    identifier: number;
    /**
     * @desc 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    pageX: number;
    /**
     * @desc 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    pageY: number;
    /**
     * @desc 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴
     */
    clientX: number;
    /**
     * @desc 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴
     */
    clientY: number;
    /**
     * @desc 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴
     */
    x: number;
    /**
     * @desc 距离 Canvas 左上角的距离，Canvas 的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    y: number;
  }[];
  /**
   * @desc 触摸事件，当前变化的触摸点信息的数组
   */
  changedTouches: {
    /**
     * @desc 触摸点的标识符
     */
    identifier: number;
    /**
     * @desc 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    pageX: number;
    /**
     * @desc 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    pageY: number;
    /**
     * @desc 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴
     */
    clientX: number;
    /**
     * @desc 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴
     */
    clientY: number;
    /**
     * @desc 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴
     */
    x: number;
    /**
     * @desc 距离 Canvas 左上角的距离，Canvas 的左上角为原点，横向为 X 轴，纵向为 Y 轴
     */
    y: number;
  }[];
};

/* ---- 元素和对应事件对象 ---- */

/**
 * @desc 包装元素，不会在页面中做任何渲染，只接受控制属性
 * @desc 支持在 template 模板中嵌套 template 和 block
 * @desc 在不同的平台表现存在一定差异，推荐统一使用 template
 */
type TBlock = TComponent<{}, {}>;

/**
 * @desc 视图容器
 * @desc 类似于 div，用于包裹各种元素内容
 * @desc 如果使用 nvue，包裹文字应该使用 text 组件
 */
type TView = TComponent<
  {
    /**
     * @desc 指定按下去的样式类
     * @desc 当 hover-class="none" 时，没有点击态效果
     * @desc 默认为 none
     */
    hoverClass: string;
    /**
     * @desc 指定是否阻止本节点的祖先节点出现点击态
     * @desc 默认为 false
     */
    hoverStopPropagation: boolean;
    /**
     * @desc 按住后多久出现点击态
     * @desc 单位为毫秒
     * @desc 默认为 50
     */
    hoverStartTime: number;
    /**
     * @desc 手指松开后点击态保留时间
     * @desc 单位为毫秒
     * @desc 默认为 400
     */
    hoverStayTime: number;
  },
  {}
>;

/**
 * @desc scroll-view scroll 事件对象
 */
type TScrollViewScrollEvent = TBaseEvent & {
  detail: {
    scrollLeft: number;
    scrollTop: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaX: number;
    deltaY: number;
  };
};
/**
 * @desc 可滚动视图区域，用于区域滚动
 * @desc 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
 */
type TScrollView = TComponent<
  {
    /**
     * @desc 是否允许横向滚动
     * @desc 默认为 false
     */
    scrollX: boolean;
    /**
     * @desc 是否允许纵向滚动
     * @desc 默认为 false
     */
    scrollY: boolean;
    /**
     * @desc 距顶部/左边多远时触发 scrolltoupper 事件
     * @desc 单位为 px
     * @desc 默认为 50
     */
    upperThreshold: number | string;
    /**
     * @desc 距底部/右边多远时触发 scrolltolower 事件
     * @desc 单位为 px
     * @desc 默认为 50
     */
    lowerThreshold: number | string;
    /**
     * @desc 设置纵向滚动条位置
     */
    scrollTop: number | string;
    /**
     * @decs 设置横向滚动条位置
     */
    scrollLeft: number | string;
    /**
     * @desc 值应为某子元素 id，id 不能以数字开头
     * @desc 设置哪个方向可滚动，则在哪个方向滚动到该元素
     */
    scrollIntoView: string;
    /**
     * @desc 在设置滚动条位置时是否使用动画过渡
     * @desc 默认为 false
     */
    scrollWithAnimation: boolean;
    /**
     * @desc 是否允许 iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
     * @desc 只支持纵向
     * @desc 默认为 false
     */
    enableBackToTop: boolean;
    /**
     * @desc 控制是否出现滚动条
     * @desc 默认为 false
     */
    showScrollbar: boolean;
    /**
     * @desc 是否开启自定义下拉刷新
     * @desc 默认为 false
     */
    refresherEnabled: boolean;
    /**
     * @desc 设置自定义下拉刷新阈值
     * @desc 默认为 45
     */
    refresherThreshold: number;
    /**
     * @desc 设置自定义下拉刷新默认样式
     * @desc none 表示不使用默认样式
     * @desc 默认为 black
     */
    refresherDefaultStyle: "black" | "white" | "none";
    /**
     * @desc 自定义下拉刷新区域背景颜色
     * @desc 默认为 #FFF
     */
    refresherBackground: string;
    /**
     * @desc 设置当前下拉刷新状态
     * @desc true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
     * @desc 默认为 false
     */
    refresherTriggered: boolean;
    /**
     * @desc 是否启用 flexbox 布局
     * @desc 开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其子节点
     * @desc 默认为 false
     */
    enableFlex: boolean;
    /**
     * @desc 是否开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
     * @desc 安卓下可参考 CSS overflow-anchor 属性
     * @desc 默认为 false
     */
    scrollAnchoring: boolean;
    /**
     * @desc 滚动到顶部/左边时触发
     */
    onScrolltoupper: (event: TBaseEvent) => void;
    /**
     * @desc 滚动到底部/右边时触发
     */
    onScrolltolower: (event: TBaseEvent) => void;
    /**
     * @desc 滚动时触发
     */
    onScroll: (event: TScrollViewScrollEvent) => void;
    /**
     * @desc 自定义下拉刷新控件被下拉时触发
     */
    onRefresherpulling: (event: TBaseEvent) => void;
    /**
     * @desc 自定义下拉刷新被触发时触发
     */
    onRefresherrefresh: (event: TBaseEvent) => void;
    /**
     * @desc 自定义下拉刷新被复位时触发
     */
    onRefresherrestore: (event: TBaseEvent) => void;
    /**
     * @desc 自定义下拉刷新被中止时触发
     */
    onRefresherabort: (event: TBaseEvent) => void;
  },
  {}
>;

/**
 * @desc swiper change 事件对象
 */
type TSwiperChangeEvent = TBaseEvent & {
  detail: {
    current: number;
    source: any; // TODO: better types
  };
};
/**
 * @desc swiper transition 事件对象
 */
type TSwiperTransitionEvent = TBaseEvent & {
  detail: {
    dx: number;
    dy: number;
  };
};
/**
 * @desc swiper animationfinish 事件对象
 */
type TSwiperAnimationfinishEvent = TBaseEvent & {
  detail: {
    current: number;
    source: any; // TODO: better types
  };
};
/**
 * @desc 滑块视图容器
 * @desc 一般用于左右滑动或上下滑动，比如 banner 轮播图
 */
type TSwiper = TComponent<
  {
    /**
     * @desc 是否显示面板指示点
     * @desc 默认为 false
     */
    indicatorDots: boolean;
    /**
     * @desc 指示点颜色
     * @desc 默认为 rgba(0, 0, 0, 0.3)
     */
    indicatorColor: string;
    /**
     * @desc 当前选中的指示点颜色
     * @desc 默认为 #000
     */
    indicatorActiveColor: string;
    /**
     * @desc swiper-item 可见时的 class
     */
    activeClass: string;
    /**
     * @desc acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的 class
     */
    changingClass: boolean;
    /**
     * @desc 是否自动切换
     * @desc 默认为 false
     */
    autoplay: boolean;
    /**
     * @desc 当前所在滑块的下标
     * @desc 默认为 0
     */
    current: number;
    /**
     * @desc 当前所在滑块的 item-id ，不能与 current 被同时指定
     */
    currentItemId: string;
    /**
     * @desc 自动切换时间间隔
     * @desc 默认为 5000
     */
    interval: number;
    /**
     * @desc 滑动动画时长
     * @desc 默认为 500
     */
    duration: number;
    /**
     * @desc 是否采用衔接滑动，即播放到末尾后重新回到开头
     * @desc 默认为 false
     */
    circular: boolean;
    /**
     * @desc 滑动方向是否为纵向
     * @desc 默认为 false
     */
    vertical: boolean;
    /**
     * @desc 前边距，可用于露出前一项的一小部分
     * @desc 接受 px 和 rpx 值
     * @desc 默认为 0px
     */
    previousMargin: string;
    /**
     * @desc 后边距，可用于露出后一项的一小部分
     * @desc 接受 px 和 rpx 值
     * @desc 默认为 0px
     */
    nextMargin: string;
    /**
     * @desc 当开启时，会根据滑动速度，连续滑动多屏
     * @desc 默认 false
     */
    acceleration: boolean;
    /**
     * @desc 是否禁用代码变动触发 swiper 切换时使用动画
     * @desc 默认为 false
     */
    disableProgrammaticAnimation: boolean;
    /**
     * @desc 同时显示的滑块数量
     * @desc 默认为 1
     */
    displayMultipleItems: number;
    /**
     * @desc 是否跳过未显示的滑块布局
     * @desc 设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
     * @desc 默认为 false
     */
    skipHiddenItemLayout: boolean;
    /**
     * @desc 是否禁止用户 touch 操作
     * @desc 默认为 false
     */
    disableTouch: boolean;
    /**
     * @desc 是否监听用户的触摸事件
     * @desc 只在初始化时有效，不能动态变更
     * @desc 默认为 true
     */
    touchable: boolean;
    /**
     * @desc 指定 swiper 切换缓动动画类型
     * @desc 默认为 default
     */
    easingFunction:
      | "default"
      | "linear"
      | "easeInCubic"
      | "easeOutCubic"
      | "easeInOutCubic";
    /**
     * @desc current 改变时触发
     */
    onChange: (event: TSwiperChangeEvent) => void;
    /**
     * @desc swiper-item 位置改变时触发
     */
    onTransition: (event: TSwiperTransitionEvent) => void;
    /**
     * @desc 动画结束时触发
     */
    onAnimationfinish: (event: TSwiperAnimationfinishEvent) => void;
  },
  {}
>;

/**
 * @desc swiper 直接子组件
 * @desc 仅可放置在 swiper 组件中，宽高自动设置为 100%，不能被子组件自动撑开
 */
type TSwiperItem = TComponent<
  {
    /**
     * @desc 该 swiper-item 的标识符
     */
    itemId: string;
  },
  {}
>;

/** 可移动的视图容器，在页面中可以拖拽滑动 */
type TMovableView = TComponent<
  {
    /** movable-view 的移动方向。 */
    direction: "all" | "vertical" | "horizontal" | "none";
    /** movable-view 是否带有惯性。 */
    inertia: boolean;
    /** 超过可移动区域后，movable-view 是否还可以移动。 */
    outOfBounds: boolean;
    /** 定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画。 */
    x: string | number;
    /** 定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画。 */
    y: string | number;
    /** 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快。 */
    damping: number;
    /** 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值 2。 */
    friction: number;
    /** 是否禁用。 */
    disabled: boolean;
    /** 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内。 */
    scale: boolean;
    /** 定义缩放倍数最小值，默认为 0.5。 */
    scaleMin: number;
    /** 定义缩放倍数最大值，默认为 10。 */
    scaleMax: number;
    /** 定义缩放倍数，取值范围为 0.5 - 10 */
    scaleValue: number;
    /** 是否使用动画，默认为 true。 */
    animation: boolean;
  },
  {}
>;

/** movable-view 的可移动区域 */
type TMovableArea = TComponent<{}, {}>;

/** 文本 */
type TText = TComponent<
  {
    /** 文本是否可选 */
    selectable: boolean;
    /** 显示连续空格 */
    space: "ensp" | "emsp" | "nbsp";
    /** 是否解码 */
    decode: boolean;
  },
  {}
>;

/** 富文本 */
type TRichText = TComponent<
  {
    /** 节点列表 */
    nodes: any[];
  },
  {}
>;

/** 进度条 */
type TProgress = TComponent<
  {
    /** 百分比0~100 */
    percent: number;
    /** 在进度条右侧显示百分比 */
    showInfo: boolean;
    /** 进度条线的宽度，单位px */
    strokeWidth: number;
    /** switch 的颜色，同 css 的 color */
    color: string;
    /** radio已选择的颜色 */
    activeColor: string;
    /** radio背景条的颜色 */
    backgroundColor: string;
    /** 进度条从左往右的动画 */
    active: boolean;
    /** backwards: 动画从头播；forwards：动画从上次结束点接着播 */
    activeMode: string;
  },
  {}
>;

/** 按钮 */
type TButton = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 */
    hoverClass: string;
    /** 指定是否阻止本节点的祖先节点出现点击态 */
    hoverStopPropagation: boolean;
    /** 按住后多久出现点击态，单位毫秒 */
    hoverStartTime: number;
    /** 手指松开后点击态保留时间，单位毫秒 */
    hoverStayTime: number;
    /** 按钮的大小 */
    size: "default" | "mini";
    /** 开放数据类型 */
    type: string;
    /** 按钮是否镂空，背景色透明 */
    plain: boolean;
    /** 是否在导航条显示 loading 加载提示 */
    loading: boolean;
    /** 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 */
    formType: "submit" | "reset";
    /** 跳转方式 */
    openType:
      | "navigate"
      | "redirect"
      | "switchTab"
      | "reLaunch"
      | "navigateBack";
    /**  */
    lang: "ts";
    /** 会话来源 */
    sessionFrom: string;
    /** 会话内消息卡片标题 */
    sendMessageTitle: string;
    /** 会话内消息卡片点击跳转应用路径 */
    sendMessagePath: string;
    /** 会话内消息卡片图片 */
    sendMessageImg: string;
    /** 显示会话内消息卡片 */
    showMessageCard: boolean;
    /** 打开 APP 时，向 APP 传递的参数 */
    appParameter: string;
  },
  {}
>;

/** 多项选择器，内部由多个checkbox组成 */
type TCheckboxGroup = TComponent<{}, {}>;

/** 多选项目 */
type TCheckbox = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** radio当前取值 */
    value: number;
    /** 是否选中 */
    checked: boolean;
    /** switch 的颜色，同 css 的 color */
    color: string;
  },
  {}
>;

/** 表单 */
type TForm = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** 是否返回 formId 用于发送模板消息 */
    reportSubmit: boolean;
  },
  {}
>;

/** 输入框 */
type TInput = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** radio当前取值 */
    value: number;
    /** 开放数据类型 */
    type: string;
    /** 是否是密码类型 */
    password: boolean;
    /** 提示信息。 */
    placeholder: string;
    /** 指定 placeholder 的样式 */
    placeholderStyle: string;
    /** 指定 placeholder 的样式类 */
    placeholderClass: string;
    /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
    maxlength: number;
    /** 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
    cursorSpacing: number;
    /** 获取焦点 */
    autoFocus: boolean;
    /** 获取焦点 */
    focus: boolean;
    /** 设置键盘右下角按钮的文字 */
    confirmType: "send" | "search" | "next" | "go" | "done";
    /** 点击键盘右下角按钮时是否保持键盘不收起 */
    confirmHold: boolean;
    /** 指定focus时的光标位置 */
    cursor: number;
    /**  光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
    selectionStart: number;
    /**  光标结束位置，自动聚集时有效，需与selection-satrt搭配使用 */
    selectionEnd: number;
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: boolean;
  },
  {}
>;

/** 用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件 */
type TLabel = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** 绑定控件的 id */
    for: string;
  },
  {}
>;

/** 从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。 */
type TPicker = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** selector 普通选择器, multiSelector 多列选择器, time 时间选择器, date 日期选择器, region 省市区选择器 */
    mode: "selector" | "multiSelector" | "time" | "date" | "region";
    /** mode为 selector 或 multiSelector 时，range 有效 */
    range: any[];
    /** 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 */
    rangeKey: string;
    /** radio当前取值 */
    value: number;
    /** mode为time：表示有效时间范围的开始，字符串格式为"hh:mm"；mode为date：表示有效日期范围的开始，字符串格式为"YYYY-MM-DD" */
    start: string;
    /** mode为time：表示有效时间范围的结束，字符串格式为"hh:mm"；mode为date：表示有效日期范围的结束，字符串格式为"YYYY-MM-DD" */
    end: string;
    /** 有效值 year,month,day，表示选择器的粒度 */
    fields: "year" | "month" | "day";
    /** 可为每一列的顶部添加一个自定义的项 */
    customItem: string;
  },
  {}
>;

/** 嵌入页面的滚动选择器 */
type TPickerView = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** radio当前取值 */
    value: number;
    /** 设置选择器中间选中框的样式 */
    indicatorStyle: string;
    /** 设置选择器中间选中框的类名 */
    indicatorClass: string;
    /** 设置蒙层的样式 */
    maskStyle: string;
    /** 设置蒙层的类名 */
    maskClass: string;
  },
  {}
>;

/** 单项选择器，内部由多个 radio 组成 */
type TRadioGroup = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
  },
  {}
>;

/** 单选项目 */
type TRadio = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /** radio当前取值 */
    value: number;
    /** 是否选中 */
    checked: boolean;
    /** switch 的颜色，同 css 的 color */
    color: string;
  },
  {}
>;

/** 滑动选择器 */
type TSlider = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
    /**  radio 最小值 */
    min: number;
    /** radio最大值 */
    max: number;
    /** radio步长，取值必须大于 0，并且可被(max - min)整除 */
    step: number;
    /** radio当前取值 */
    value: number;
    /** switch 的颜色，同 css 的 color */
    color: string;
    /** radio已选择的颜色 */
    selectColor: string;
    /** radio已选择的颜色 */
    activeColor: string;
    /** radio背景条的颜色 */
    backgroundColor: string;
    /** radio滑块的大小，取值范围为 12 - 28 */
    blockSize: number;
    /** 滑块颜色 */
    blockColor: string;
    /** 是否显示当前 value */
    showValue: boolean;
  },
  {}
>;

/** 开关选择器 */
type TSwitch = TComponent<
  {
    /** 是否选中 */
    checked: boolean;
    /** 开放数据类型 */
    type: string;
    /** switch 的颜色，同 css 的 color */
    color: string;
    /** 是否禁用。 */
    disabled: boolean;
  },
  {}
>;

/** 多行输入框 */
type TTextarea = TComponent<
  {
    /** radio当前取值 */
    value: number;
    /** 提示信息。 */
    placeholder: string;
    /** 指定 placeholder 的样式 */
    placeholderStyle: string;
    /** 指定 placeholder 的样式类 */
    placeholderClass: string;
    /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
    maxlength: number;
    /** 获取焦点 */
    autoFocus: boolean;
    /** 获取焦点 */
    focus: boolean;
    /** 指定focus时的光标位置 */
    cursor: number;
    /** 设置键盘右下角按钮的文字 */
    confirmType: "send" | "search" | "next" | "go" | "done";
    /** 是否自动增高，设置auto-height时，style.height不生效 */
    autoHeight: boolean;
    /** 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true */
    fixed: boolean;
    /** 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
    cursorSpacing: number;
    /** 是否显示键盘上方带有”完成“按钮那一栏 */
    showConfirmBar: boolean;
    /**  光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
    selectionStart: number;
    /**  光标结束位置，自动聚集时有效，需与selection-satrt搭配使用 */
    selectionEnd: number;
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: boolean;
  },
  {}
>;

/** 页面链接 */
type TNavigator = TComponent<
  {
    /** 在哪个目标上发生跳转，默认当前应用 */
    target: string;
    /** 推流地址。目前仅支持 flv, rtmp 格式 */
    url: string;
    /** 跳转方式 */
    openType:
      | "navigate"
      | "redirect"
      | "switchTab"
      | "reLaunch"
      | "navigateBack";
    /** 当 open-type 为 navigateBack 时有效，表示回退的层数 */
    delta: number;
    /** 当target="miniProgram"时有效，要打开的小程序 appId */
    appId: string;
    /** 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页 */
    path: string;
    /** 当target="miniProgram"时有效，需要传递给目标应用的数据，目标应用可在 App.onLaunch()，App.onShow() 中获取到这份数据 */
    extraData: Record<string, any>;
    /** 当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是体验版或正式版，则打开的小程序必定是正式版 */
    version: string;
    /** 当 open-type="navigateTo" 或 open-type="navigateBack" 时有效，窗口的显示/关闭的动画类型。 */
    animationType:
      | "auto"
      | "none"
      | "slide-in-right"
      | "slide-in-left"
      | "slide-in-top"
      | "slide-in-bottom"
      | "fade-in"
      | "zoom-out"
      | "zoom-fade-out"
      | "pop-in"
      | "slide-out-right"
      | "slide-out-left"
      | "slide-out-top"
      | "slide-out-bottom"
      | "fade-out"
      | "zoom-in"
      | "zoom-fade-in"
      | "pop-out";
    /** 当 open-type="navigateTo" 或 open-type="navigateBack" 时有效，窗口的显示/关闭动画的持续时间。 */
    animationDuration: number;
    /** 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 */
    hoverClass: string;
    /** 指定是否阻止本节点的祖先节点出现点击态 */
    hoverStopPropagation: boolean;
    /** 按住后多久出现点击态，单位毫秒 */
    hoverStartTime: number;
    /** 手指松开后点击态保留时间，单位毫秒 */
    hoverStayTime: number;
  },
  {}
>;

/** 音频 */
type TAudio = TComponent<
  {
    /** 是否循环播放 */
    loop: boolean;
    /** webview 指向网页的链接 */
    src: string | string;
    /** 控件 */
    controls: any[];
    /** 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效 */
    poster: string;
    /** 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效 */
    name: string;
    /** 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效 */
    author: string;
  },
  {}
>;

/** 图片 */
type TImage = TComponent<
  {
    /** 是否循环播放 */
    loop: boolean;
    /** webview 指向网页的链接 */
    src: string | string;
    /** 图片裁剪、缩放的模式 */
    mode:
      | "scaleToFill"
      | "aspectFit"
      | "aspectFill"
      | "widthFix"
      | "heightFix"
      | "top"
      | "bottom"
      | "center"
      | "left"
      | "right"
      | "top left"
      | "top right"
      | "bottom left"
      | "bottom right";
    /** 图片懒加载。只针对page与scroll-view下的image有效 */
    lazyLoad: boolean;
    /** 图片显示动画效果 */
    fadeShow: boolean;
    /** 默认不解析 webP 格式，只支持网络资源 */
    webp: boolean;
    /** 开启长按图片显示识别小程序码菜单 */
    showMenuByLongpress: boolean;
  },
  {}
>;

/** 视频 */
type TVideo = TComponent<
  {
    /** 是否循环播放 */
    loop: boolean;
    /** webview 指向网页的链接 */
    src: string | string;
    /** 指定视频初始播放位置 */
    initialTime: number;
    /** 指定视频长度 */
    duration: number;
    /** 控件 */
    controls: any[];
    /** 弹幕列表 */
    danmuList: any[];
    /** 是否显示弹幕按钮，只在初始化时有效，不能动态变更 */
    danmuBtn: boolean;
    /**  是否展示弹幕，只在初始化时有效，不能动态变更 */
    enableDanmu: boolean;
    /** 自动播放 */
    autoplay: boolean;
    /** 是否静音 */
    muted: boolean;
    /** 在非全屏模式下，是否开启亮度与音量调节手势 */
    pageGesture: boolean;
    /** movable-view 的移动方向。 */
    direction: "all" | "vertical" | "horizontal" | "none";
    /**  若不设置，宽度大于240时才会显示 */
    showProgress: boolean;
    /** 是否显示全屏按钮 */
    showFullscreenBtn: boolean;
    /** 是否显示视频底部控制栏的播放按钮 */
    showPlayBtn: boolean;
    /** 是否显示视频中间的播放按钮 */
    showCenterPlayBtn: boolean;
    /** 是否开启控制进度的手势 */
    enableProgressGesture: boolean;
    /** 当视频大小与 video 容器大小不一致时，视频的表现形式。 */
    objectFit: "contain" | "fill" | "cover";
    /** 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效 */
    poster: string;
    /** 是否显示静音按钮 */
    showMuteBtn: boolean;
    /** 视频的标题，全屏时在顶部展示 */
    title: string;
    /** 播放按钮的位置 */
    playBtnPosition: string;
    /** 是否开启播放手势，即双击切换播放、暂停 */
    enablePlayGesture: boolean;
    /** 当跳转到其它小程序页面时，是否自动暂停本页面的视频 */
    autoPauseIfNavigate: boolean;
    /** 当跳转到其它微信原生页面时，是否自动暂停本页面的视频 */
    autoPauseIfOpenNative: boolean;
    /** 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture） */
    vslideGesture: boolean;
    /** 在全屏模式下，是否开启亮度与音量调节手势 */
    vslideGestureInFullscreen: boolean;
    /** 视频前贴广告单元ID */
    adUnitId: string;
    /** 用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址 */
    posterForCrawler: string;
    /** 解码器选择 */
    codec: string;
    /** 是否对 http、https 视频源开启本地缓存 */
    httpCache: boolean;
    /** 播放策略 */
    playStrategy: number;
  },
  {}
>;

/** 地图 */
type TMap = TComponent<
  {
    /** 中心经度 */
    longitude: number;
    /** 中心纬度 */
    latitude: number;
    /** 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内。 */
    scale: boolean;
    /** 标记点 */
    markers: any[];
    /** 即将移除，请使用 markers */
    covers: any[];
    /** 路线 */
    polyline: any[];
    /** 圆 */
    circles: any[];
    /** 控件 */
    controls: any[];
    /** 缩放视野以包含所有给定的坐标点 */
    includePoints: any[];
    /** 显示带有方向的当前定位点 */
    showLocation: boolean;
  },
  {}
>;

/** 画布 */
type TCanvas = TComponent<
  {
    /** canvas 组件的唯一标识符 */
    canvasId: string;
    /** 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 */
    disableScroll: boolean;
  },
  {}
>;

/** 承载网页的容器 */
type TWebView = TComponent<
  {
    /** webview 指向网页的链接 */
    src: string | string;
    /** webview 的样式 */
    webviewStyles: Record<string, any> | boolean;
  },
  {}
>;

/** 覆盖在原生组件之上的文本视图，可覆盖的原生组件包括map、video、canvas、camera，只支持嵌套cover-view、cover-image */
type TCoverView = TComponent<{}, {}>;

/** 覆盖在原生组件之上的图片视图，可覆盖的原生组件同cover-view，支持嵌套在cover-view里。 */
type TCoverImage = TComponent<
  {
    /** webview 指向网页的链接 */
    src: string | string;
  },
  {}
>;

/** 图标 */
type TIcon = TComponent<
  {
    /** 开放数据类型 */
    type: string;
    /** 按钮的大小 */
    size: "default" | "mini";
    /** switch 的颜色，同 css 的 color */
    color: string;
  },
  {}
>;

/** 仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致 */
type TPickerViewColumn = TComponent<
  {
    /** 是否禁用。 */
    disabled: boolean;
  },
  {}
>;

/** 相机组件 */
type TCamera = TComponent<
  {
    /** 前置或后置，值为front, back */
    flash: "back" | "front";
    /** 闪光灯，值为auto, on, off */
    devicePosition: string;
  },
  {}
>;

/** 实时音视频播放 */
type TLivePlayer = TComponent<
  {
    /** webview 指向网页的链接 */
    src: string | string;
    /** live（直播），RTC（实时通话，该模式时延更低） */
    mode: "live" | "RTC";
    /** 自动播放 */
    autoplay: boolean;
    /** 是否静音 */
    muted: boolean;
    /** 画面方向，可选值有 vertical，horizontal */
    orientation: "vertical" | "horizontal";
    /** 填充模式，可选值有 contain，fillCrop */
    objectFit: "contain" | "fillCrop";
    /** 进入后台时是否静音 */
    backgroundMute: boolean;
    /** 最小缓冲区，单位s */
    minCache: string;
    /** 最大缓冲区，单位s */
    maxCache: string;
  },
  {}
>;

/** 实时音视频录制 */
type TLivePusher = TComponent<
  {
    /** 推流地址。目前仅支持 flv, rtmp 格式 */
    url: string;
    /** 推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。 */
    mode: "SD" | "HD" | "FHD";
    /** 自动推流 */
    autopush: boolean;
    /** 是否静音 */
    muted: boolean;
    /** 开启摄像头 */
    enableCamera: boolean;
    /** 获取焦点 */
    autoFocus: boolean;
    /** 画面方向，可选值有 vertical，horizontal */
    orientation: "vertical" | "horizontal";
    /** 美颜 */
    beauty: number;
    /** 美白 */
    aspect: number;
    /** 最小码率 */
    minBitrate: string;
    /** 最大码率 */
    maxBitrate: string;
    /** 进入后台时推流的等待画面 */
    waitingImage: string;
    /** 等待画面资源的MD5值 */
    waitingImageMd5: string;
    /** 进入后台时是否静音 */
    backgroundMute: boolean;
  },
  {}
>;

/** 用于展示微信开放的数据 */
type TOpenData = TComponent<
  {
    /** 开放数据类型 */
    type: string;
    /** 当 type="groupName" 时生效, 群id */
    openGid: string;
    /**  */
    lang: "ts";
  },
  {}
>;

/** 广告 */
type TAd = TComponent<
  {
    /** App广告位id，在uni-AD官网申请广告位 */
    adpid: string;
  },
  {}
>;

/** Draw 信息流广告 */
type TAdDraw = TComponent<
  {
    /** App广告位id，在uni-AD官网申请广告位 */
    adpid: string;
  },
  {}
>;

/** 页面导航条配置节点 */
type TNavigationBar = TComponent<
  {
    /** 视频的标题，全屏时在顶部展示 */
    title: string;
    /** 标题icon */
    titleIcon: boolean;
    /** 标题icon圆角 */
    titleIconRadius: boolean;
    /**  */
    subtitleText: boolean;
    /**  */
    subtitleSize: boolean;
    /**  */
    subtitleColor: boolean;
    /**  */
    subtitleOverflow: boolean;
    /**  */
    titleAlign: boolean;
    /**  */
    backgroundImage: boolean;
    /**  */
    backgroundRepeat: boolean;
    /**  */
    blurEffect: boolean;
    /** 是否在导航条显示 loading 加载提示 */
    loading: boolean;
    /** 导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: boolean;
    /** 窗口的背景色，必须为十六进制颜色值 */
    backgroundColor: string;
    /** 改变导航栏颜色时的动画时长，默认为 0 （即没有动画效果） */
    colorAnimationDuration: boolean;
    /** 改变导航栏颜色时的动画方式，支持 linear 、 easeIn 、 easeOut 和 easeInOut */
    colorAnimationTimingFunc: boolean;
  },
  {}
>;

/** 自定义tabBar */
type TCustomTabBar = TComponent<
  {
    /** movable-view 的移动方向。 */
    direction: "all" | "vertical" | "horizontal" | "none";
    /** 是否显示icon */
    showIcon: boolean;
    /** 选中的tabBar选项索引值 */
    selected: number;
  },
  {}
>;

/** 自定义tabBar */
type TPageMeta = TComponent<
  {
    /** 下拉背景字体、loading 图的样式，仅支持 dark 和 light */
    backgroundTextStyle: string;
    /** 窗口的背景色，必须为十六进制颜色值 */
    backgroundColor: string;
    /** 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 */
    backgroundColorTop: string;
    /** 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 */
    backgroundColorBottom: string;
    /** 滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置 */
    scrollTop: string;
    /** 滚动动画时长 */
    scrollDuration: number;
    /** 页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点 */
    pageStyle: string;
    /** 页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小 */
    rootFontSize: string;
    /**  */
    enablePullDownRefresh: boolean;
  },
  {}
>;

/** 富文本编辑器，可以对图片、文字进行编辑。 */
type TEditor = TComponent<
  {
    /** 设置编辑器为只读。 */
    readOnly: boolean;
    /** 提示信息。 */
    placeholder: string;
    /** 点击图片时显示图片大小控件。 */
    showImgSize: boolean;
    /** 点击图片时显示工具栏控件。 */
    showImgToolbar: boolean;
    /** 点击图片时显示修改尺寸控件。 */
    showImgResize: string;
  },
  {}
>;

/** 是一个数据库查询组件，它是对uni-clientdb的js库的再封装。 */
type TUnicloudDb = TComponent<
  {
    /** 表名 */
    collection: string | string;
    /** 查询字段，多个字段用 `,` 分割 */
    field: string | string;
    /** 查询条件 */
    where: string | string;
    /** 云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理 */
    action: string | string;
    /** 排序字段及正序倒叙设置 */
    orderby: string;
    /** 对数据进行分组 */
    groupby: string;
    /** 对数据进行分组统计 */
    groupField: string;
    /** 是否对数据查询结果中重复的记录进行去重 */
    distinct: boolean;
    /** add 多次查询的集合, replace 当前查询的集合 */
    pageData: "add" | "replace";
    /** 当前页 */
    pageCurrent: number;
    /** 每页数据数量 */
    pageSize: number;
    /** 指定查询结果是否返回数组第一条数据，默认 false。在false情况下返回的是数组，即便只有一条结果，也需要[0]的方式获取。在true下，直接返回结果数据，少一层数组 */
    getone: boolean;
    /** 是否查询总数量 */
    getcount: boolean;
    /** 是否查询树状结构数据 */
    gettree: boolean;
    /** gettree的第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询 */
    startwith: string;
    /** gettree查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1 */
    limitlevel: number;
    /** 是否手动加载数据，默认为 false，页面onready时自动联网加载数据 */
    manual: boolean;
  },
  {}
>;

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Block: TBlock;
    View: TView;
    ScrollView: TScrollView;
    MatchMedia: TMatchMedia;
    Swiper: TSwiper;
    SwiperItem: TSwiperItem;
    MovableView: TMovableView;
    MovableArea: TMovableArea;
    Text: TText;
    RichText: TRichText;
    Progress: TProgress;
    Button: TButton;
    CheckboxGroup: TCheckboxGroup;
    Checkbox: TCheckbox;
    Form: TForm;
    Input: TInput;
    Label: TLabel;
    Picker: TPicker;
    PickerView: TPickerView;
    RadioGroup: TRadioGroup;
    Radio: TRadio;
    Slider: TSlider;
    Switch: TSwitch;
    Textarea: TTextarea;
    Navigator: TNavigator;
    Audio: TAudio;
    Image: TImage;
    Video: TVideo;
    Map: TMap;
    Canvas: TCanvas;
    WebView: TWebView;
    CoverView: TCoverView;
    CoverImage: TCoverImage;
    Icon: TIcon;
    PickerViewColumn: TPickerViewColumn;
    Camera: TCamera;
    LivePlayer: TLivePlayer;
    LivePusher: TLivePusher;
    OpenData: TOpenData;
    Ad: TAd;
    AdDraw: TAdDraw;
    NavigationBar: TNavigationBar;
    CustomTabBar: TCustomTabBar;
    PageMeta: TPageMeta;
    Editor: TEditor;
    UnicloudDb: TUnicloudDb;
  }
}
