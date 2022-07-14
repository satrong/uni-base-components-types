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
 * @desc 通用事件对象
 */
type TEvent = {
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
  /**
   * @desc 触摸事件，当前停留在屏幕中的触摸点信息的数组
   */
  touches?: {
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
  changedTouches?: {
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
   * @desc 额外的信息
   */
  detail?: Record<string, any>;
  [key: string]: any;
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
type TScrollViewScrollEvent = TEvent & {
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
    onScrolltoupper: (event: TEvent) => void;
    /**
     * @desc 滚动到底部/右边时触发
     */
    onScrolltolower: (event: TEvent) => void;
    /**
     * @desc 滚动时触发
     */
    onScroll: (event: TScrollViewScrollEvent) => void;
    /**
     * @desc 自定义下拉刷新控件被下拉时触发
     */
    onRefresherpulling: (event: TEvent) => void;
    /**
     * @desc 自定义下拉刷新被触发时触发
     */
    onRefresherrefresh: (event: TEvent) => void;
    /**
     * @desc 自定义下拉刷新被复位时触发
     */
    onRefresherrestore: (event: TEvent) => void;
    /**
     * @desc 自定义下拉刷新被中止时触发
     */
    onRefresherabort: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc swiper change 事件对象
 */
type TSwiperChangeEvent = TEvent & {
  detail: {
    current: number;
    source: any; // TODO: better types
  };
};
/**
 * @desc swiper transition 事件对象
 */
type TSwiperTransitionEvent = TEvent & {
  detail: {
    dx: number;
    dy: number;
  };
};
/**
 * @desc swiper animationfinish 事件对象
 */
type TSwiperAnimationfinishEvent = TEvent & {
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

/**
 * @desc media query 匹配检测节点
 * @desc 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
 * @desc 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
 */
type TMatchMedia = TComponent<
  {
    /**
     * @desc 页面最小宽度
     * @desc 单位为 px
     */
    minWidth: number;
    /**
     * @desc 页面最大宽度
     * @desc 单位为 px
     */
    maxWidth: number;
    /**
     * @desc 页面宽度
     * @desc 单位为 px
     */
    width: number;
    /**
     * @desc 页面最小高度
     * @desc 单位为 px
     */
    minHeight: number;
    /**
     * @desc 页面最大高度
     * @desc 单位为 px
     */
    maxHeight: number;
    /**
     * @desc 页面高度
     * @desc 单位为 px
     */
    height: number;
    /**
     * @desc 屏幕方向
     */
    orientation: "landscape" | "portrait";
  },
  {}
>;

/**
 * @desc 可拖动区域
 * @desc 在其中内嵌 movable-view 组件用于指示可拖动的区域
 * @desc 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
 */
type TMovableArea = TComponent<
  {
    /**
     * @desc 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
     * @desc 默认为 false
     */
    scaleArea: boolean;
  },
  {}
>;

/**
 * @desc movable-view change 事件对象
 */
type TMovableViewChangeEvent = TEvent & {
  detail: {
    x: number;
    y: number;
    source: "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction" | "";
  };
};
/**
 * @desc movable-view scale 事件对象
 */
type TMovableViewScaleEvent = TEvent & {
  detail: {
    x: number;
    y: number;
    scale: boolean;
  };
};
/**
 * @desc 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
 * @desc movable-area 直接子组件
 */
type TMovableView = TComponent<
  {
    /**
     * @desc movable-view 的移动方向
     * @desc 默认为 none
     */
    direction: "all" | "vertical" | "horizontal" | "none";
    /**
     * @desc 是否带有惯性
     * @desc 默认为 false
     */
    inertia: boolean;
    /**
     * @desc 超过可移动区域后，是否还可以移动
     * @desc 默认为 false
     */
    outOfBounds: boolean;
    /**
     * @desc 定义 x 轴方向的偏移
     * @desc 如果 x 的值不在可移动范围内，会自动移动到可移动范围
     * @desc 改变 x 的值会触发动画
     */
    x: string | number;
    /**
     * @desc 定义 y 轴方向的偏移
     * @desc 如果 y 的值不在可移动范围内，会自动移动到可移动范围
     * @desc 改变 y 的值会触发动画
     */
    y: string | number;
    /**
     * @desc 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画
     * @desc 值越大移动越快
     * @desc 默认为 20
     */
    damping: number;
    /**
     * @desc 摩擦系数，用于控制惯性滑动的动画
     * @desc 值越大摩擦力越大，滑动越快停止
     * @desc 必须大于 0，否则会被设置成默认值
     * @desc 默认为 2
     */
    friction: number;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 是否支持双指缩放
     * @desc 默认缩放手势生效区域是在 movable-view 内
     * @desc 默认为 false
     */
    scale: boolean;
    /**
     * @desc 定义缩放倍数最小值
     * @desc 默认为 0.5
     */
    scaleMin: number;
    /**
     * @desc 定义缩放倍数最大值
     * @desc 默认为 10
     */
    scaleMax: number;
    /**
     * @desc 定义缩放倍数
     * @desc 取值范围为 0.5 - 10
     * @desc 默认为 1
     */
    scaleValue: number;
    /**
     * @desc 是否使用动画
     * @desc 默认为 true
     */
    animation: boolean;
    /**
     * @desc 拖动过程中触发
     */
    onChange: (event: TMovableViewChangeEvent) => void;
    /**
     * @desc 缩放过程中触发
     */
    onScale: (event: TMovableViewScaleEvent) => void;
  },
  {}
>;

/**
 * @desc 覆盖在原生组件之上的文本视图
 * @desc app-vue 和小程序框架，渲染引擎是 webview
 * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
 * @desc 为了能正常覆盖原生组件，设计了cover-view
 */
type TCoverView = TComponent<
  {
    /**
     * @desc 设置顶部滚动偏移量
     * @desc 仅在设置了 overflow-y: scroll 成为滚动元素后生效
     */
    scrollTop: number | string;
  },
  {}
>;

/**
 * @desc 覆盖在原生组件之上的图片视图
 * @desc 可覆盖的原生组件同 cover-view
 * @desc 支持嵌套在 cover-view 里
 */
type TCoverImage = TComponent<
  {
    /**
     * @desc 图片路径
     * @desc 支持本地路径、网络路径
     * @desc 不支持 base64 格式
     */
    src: string;
    /**
     * @desc 图片加载成功时触发
     */
    onLoad: (event: TEvent) => void;
    /**
     * @desc 图片加载失败时触发
     */
    onError: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc 图标
 */
type TIcon = TComponent<
  {
    /**
     * @desc icon 的类型
     */
    type: string;
    /**
     * @desc icon 的大小
     * @desc 单位为 px
     * @desc 默认为 23
     */
    size: number;
    /**
     * @desc icon 的颜色
     */
    color: string;
  },
  {}
>;

/**
 * @desc 文本组件
 * @desc 用于包裹文本内容
 */
type TText = TComponent<
  {
    /**
     * @desc 文本是否可选
     * @desc 默认为 false
     */
    selectable: boolean;
    /**
     * @desc 文本是否可选，可能会使文本节点显示为 inline-block
     * @desc 默认为 false
     */
    userSelect: boolean;
    /**
     * @desc 显示连续空格
     * @desc 没有默认值
     */
    space: "ensp" | "emsp" | "nbsp";
    /**
     * @desc 是否解码
     * @desc 默认为 false
     */
    decode: boolean;
  },
  {}
>;

/**
 * @desc rich-text 文本节点
 */
type TRichTextTextNode = {
  type: "text";
  text: string;
};
/**
 * @desc rich-text 元素节点
 */
type TRichTextNodeNode = {
  type?: "node";
  name: string;
  attrs?: Record<string, any>;
  children?: Array<TRichTextTextNode | TRichTextNodeNode>;
};
/**
 * @desc rich-text 节点
 */
type TRichTextNode = TRichTextTextNode | TRichTextNodeNode;
/**
 * @desc rich-text itemclick 事件对象
 */
type TRichTextItemclickEvent = TEvent & {
  detail: {
    node: TRichTextNode;
  };
};
/**
 * @desc 富文本
 * */
type TRichText = TComponent<
  {
    /**
     * @desc 节点列表
     * @desc
     */
    nodes: TRichTextNode[] | string;
    /**
     * @desc 显示连续空格
     * @desc 没有默认值
     */
    space: "ensp" | "emsp" | "nbsp";
    /**
     * @desc 富文本是否可以长按选中
     * @desc 默认为 true
     */
    selectable: boolean;
    /**
     * @desc 是否阻止长按图片时弹起默认菜单
     * @desc 只在初始化时有效，不能动态变更
     * @desc 默认为 false
     */
    imageMenuPrevent: boolean;
    /**
     * @desc 富文本中的图片是否可点击预览
     * @desc 在不设置的情况下，若 rich-text 未监听点击事件，则默认开启
     * @desc 未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview
     */
    preview: boolean;
    /**
     * @desc 拦截点击事件，支持 a 和 img 标签
     */
    onItemclick: (event: TRichTextItemclickEvent) => void;
  },
  {}
>;

/**
 * @desc 进度条
 */
type TProgress = TComponent<
  {
    /**
     * @desc 百分比
     * @desc 取值范围为 0 - 100
     * @desc 没有默认值
     */
    percent: number;
    /**
     * @desc 是否在进度条右侧显示百分比
     * @desc 默认为 false
     */
    showInfo: boolean;
    /**
     * @desc 圆角大小
     * @desc 默认为 0
     */
    borderRadius: number | string;
    /**
     * @desc 进度条右侧显示的百分比字体大小
     * @desc 默认为 16
     */
    fontSize: number | string;
    /**
     * @desc 进度条线的宽度
     * @desc 单位为 px
     * @desc 默认为 6
     */
    strokeWidth: number;
    /**
     * @desc 已选择的进度条的颜色
     * @desc 默认为 #09bb07，百度默认为 #e6e6e6
     */
    activeColor: string;
    /**
     * @desc 未选择的进度条的颜色
     * @desc 默认为 #ebebeb
     */
    backgroundColor: string;
    /**
     * @desc 是否显示进度条从左往右的动画
     * @desc 默认为 false
     */
    active: boolean;
    /**
     * @desc 动画播放方式
     * @desc 默认为 backwards
     */
    activeMode: "backwards" | "forwards";
    /**
     * @desc 进度增加 1% 所需时间
     * @desc 单位为 ms
     * @desc 默认为 30
     */
    duration: number;
    /**
     * @desc 动画完成时触发
     */
    onActiveend: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc 按钮
 */
type TButton = TComponent<
  {
    /**
     * @desc 按钮的大小
     * @desc 默认为 default
     */
    size: "default" | "mini";
    /**
     * @desc 按钮的样式类型
     * @desc 默认为 default
     */
    type: "primary" | "default" | "warn";
    /**
     * @desc 按钮是否镂空，背景色透明
     * @desc 默认为 false
     */
    plain: boolean;
    /**
     * @desc 是否禁用
     */
    disabled: boolean;
    /**
     * @desc 是否带 loading 图标
     * @desc 默认为 false
     */
    loading: boolean;
    /**
     * @desc 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
     * @desc 没有默认值
     */
    formType: "submit" | "reset";
    /**
     * @desc 开放能力
     */
    openType:
      | "feedback"
      | "share"
      | "getUserInfo"
      | "contact"
      | "getPhoneNumber"
      | "launchApp"
      | "openSetting"
      | "chooseAvatar"
      | "getAuthorize"
      | "lifestyle"
      | "contactShare"
      | "openGroupProfile"
      | "openGuildProfile"
      | "openPublicProfile"
      | "shareMessageToFriend"
      | "addFriend"
      | "addColorSign"
      | "addGroupApp"
      | "addToFavorites"
      | "chooseAddress"
      | "chooseInvoiceTitle"
      | "login"
      | "subscribe"
      | "favorite"
      | "watchLater"
      | "openProfile";
    /**
     * @desc 指定按下去的样式类
     * @desc 当 hover-class="none" 时，没有点击态效果
     * @desc 默认为 button-hover
     */
    hoverClass: string;
    /**
     * @desc 按住后多久出现点击态
     * @desc 单位为 ms
     * @desc 默认为 20
     */
    hoverStartTime: number;
    /**
     * @desc 手指松开后点击态保留时间
     * @desc 单位为 ms
     * @desc 默认为 70
     */
    hoverStayTime: number;
    /**
     * @desc 打开 APP 时，向 APP 传递的参数
     * @desc open-type="launchApp" 时有效
     */
    appParameter: string;
    /**
     * @desc 指定是否阻止本节点的祖先节点出现点击态
     * @desc 默认为 false
     */
    hoverStopPropagation: boolean;
    /**
     * @desc 指定返回用户信息的语言
     */
    lang: "zh_CN" | "zh_TW" | "en";
    /**
     * @desc 会话来源
     * @desc open-type="contact" 时有效
     */
    sessionFrom: string;
    /**
     * @desc 会话内消息卡片标题
     * @desc open-type="contact" 时有效
     * @desc 默认为当前标题
     */
    sendMessageTitle: string;
    /**
     * @desc 会话内消息卡片点击跳转小程序路径
     * @desc open-type="contact" 时有效
     * @desc 默认为当前分享路径
     */
    sendMessagePath: string;
    /**
     * @desc 会话内消息卡片图片
     * @desc open-type="contact" 时有效
     * @desc 默认为截图
     */
    sendMessageImg: string;
    /**
     * @desc 是否显示会话内消息卡片
     * @desc 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
     * @desc open-type="contact" 时有效
     * @desc 默认为 false
     */
    showMessageCard: boolean;
    /**
     * @desc 打开群资料卡时，传递的群号
     * @desc open-type="openGroupProfile" 时有效
     */
    groupId: string;
    /**
     * @desc 打开频道页面时，传递的频道号
     * @desc open-type="openGuildProfile" 时有效
     */
    guildId: string;
    /**
     * @desc 打开公众号资料卡时，传递的号码
     * @desc open-type="openPublicProfile" 时有效
     */
    publicId: string;
    /**
     * @desc 获取用户手机号时回调
     * @desc open-type="getPhoneNumber" 时有效
     */
    onGetphonenumber: (event: TEvent) => void;
    /**
     * @desc 使用开放能力发生错误时回调
     */
    onError: (event: TEvent) => void;
    /**
     * @desc 在打开授权设置页并关闭后回调
     * @desc open-type="openSetting" 时有效
     */
    onOpensetting: (event: TEvent) => void;
    /**
     * @desc 从小程序成功打开 APP 回调
     * @desc open-type="launchApp" 时有效
     */
    onLaunchapp: (event: TEvent) => void;
    /**
     * @desc 获取用户头像回调
     * @desc open-type="chooseAvatar" 时有效
     */
    onChooseavatar: (event: TEvent) => void;
    /**
     * @desc 添加群应用回调
     * @desc open-type="addGroupApp" 时有效
     */
    onAddgroupapp: (event: TEvent) => void;
    /**
     * @desc 用户编辑并选择收货地址回调
     * @desc open-type="chooseAddress" 时有效
     */
    onChooseaddress: (event: TEvent) => void;
    /**
     * @desc 用户选择发票抬头回调
     * @desc open-type="chooseInvoiceTitle" 时有效
     */
    onChooseinvoicetitle: (event: TEvent) => void;
    /**
     * @desc 订阅消息授权回调
     * @desc open-type="subscribe" 时有效
     */
    onSubscribe: (event: TEvent) => void;
    /**
     * @desc 登录回调
     * @desc open-type="login" 时有效
     */
    onLogin: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc checkbox-group change 事件对象
 */
type TCheckboxGroupChangeEvent = TEvent & {
  detail: {
    value: string[];
  };
};
/**
 * @desc 多项选择器，内部由多个 checkbox 组成
 */
type TCheckboxGroup = TComponent<
  {
    /**
     * @desc 选中项发生改变时触发
     */
    onChange: (event: TCheckboxGroupChangeEvent) => void;
  },
  {}
>;

/**
 * @desc 多选项目
 */
type TCheckbox = TComponent<
  {
    /**
     * @desc 在 form 中作为 key
     */
    name: string;
    /**
     * @desc checkbox 标识
     * @desc 选中时触发 checkbox-group 的 change 事件并携带 value */
    value: string;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 当前是否选中，可用于设置默认选中
     * @desc 默认为 false
     */
    checked: boolean;
    /**
     * @desc checkbox 的颜色
     */
    color: string;
  },
  {}
>;

/**
 * @desc editor focus、blur、input 事件对象
 */
type TEditorEvent = TEvent & {
  detail: {
    html: string;
    text: string;
    delta: Record<string, any>;
  };
};
/**
 * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
 * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 * @desc 图片控件仅初始化时设置有效
 */
type TEditor = TComponent<
  {
    /**
     * @desc 是否只读
     * @desc 默认为 false
     */
    readOnly: boolean;
    /**
     * @desc 提示信息
     */
    placeholder: string;
    /**
     * @desc 点击图片时是否显示图片大小控件
     * @desc 默认为 false
     */
    showImgSize: boolean;
    /**
     * @desc 点击图片时是否显示工具栏控件
     * @desc 默认为 false
     */
    showImgToolbar: boolean;
    /**
     * @desc 点击图片时是否显示修改尺寸控件
     * @desc 默认为 false
     */
    showImgResize: string;
    /**
     * @desc 编辑器初始化完成时触发
     */
    onReady: (event: TEvent) => void;
    /**
     * @desc 编辑器聚焦时触发
     */
    onFocus: (event: TEditorEvent) => void;
    /**
     * @desc 编辑器失焦时触发
     */
    onBlur: (event: TEditorEvent) => void;
    /**
     * @desc 编辑器内容改变时触发
     */
    onInput: (event: TEditorEvent) => void;
    /**
     * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
     */
    onStatuschange: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc form submit 事件对象
 */
type TFormSubmitEvent = TEvent & {
  detail: {
    value: {
      [key: string]: number | string | boolean;
    };
    formId?: string;
  };
};
/**
 * @desc 表单
 * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
 */
type TForm = TComponent<
  {
    /**
     * @desc 是否返回 formId 用于发送模板消息
     * @desc 默认为 false
     */
    reportSubmit: boolean;
    /**
     * @desc 等待一段时间以确认 formId 是否生效
     * @desc 如果未指定这个参数，formId 有很小的概率无效（网络问题）
     * @desc 指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间
     * @desc 如果无效，将返回 requestFormId:fail 开头的 formId
     * @desc 单位为 ms
     * @desc 默认为 0
     */
    reportSubmitTimeout: number;
    /**
     * @desc 表单提交时触发
     */
    onSubmit: (event: TFormSubmitEvent) => void;
    /**
     * @desc 表单重置时触发
     */
    onReset: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc input input 事件对象
 */
type TInputInputEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc input focus 事件对象
 */
type TInputFocusEvent = TEvent & {
  detail: {
    value: string;
    height: number;
  };
};
/**
 * @desc input blur 事件对象
 */
type TInputBlurEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc input confirm 事件对象
 */
type TInputConfirmEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc input keyboardheightchange 事件对象
 */
type TInputKeyboardheightchangeEvent = TEvent & {
  detail: {
    height: number;
    duration: number;
  };
};
/** 输入框 */
type TInput = TComponent<
  {
    /**
     * @desc 在 form 中作为 key
     */
    name: string;
    /**
     * @desc 输入框的初始内容
     */
    value: string;
    /**
     * @desc input 类型
     * @desc 默认为 text
     */
    type:
      | "text"
      | "number"
      | "idcard"
      | "digit"
      | "tel"
      | "safe-password"
      | "nickname";
    /**
     * @desc 文本区域的语义，根据类型自动填充
     */
    textContentType: "oneTimeCode";
    /**
     * @desc 是否是密码类型
     * @desc 默认为 false
     */
    password: boolean;
    /**
     * @desc 输入框为空时占位符
     */
    placeholder: string;
    /**
     * @desc 指定 placeholder 的样式
     */
    placeholderStyle: string;
    /**
     * @desc 指定 placeholder 的样式类
     * @desc 默认为 input-placeholder
     */
    placeholderClass: string;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 最大输入长度
     * @desc 设置为 -1 的时候不限制最大长度
     * @desc 默认为 140
     */
    maxlength: number;
    /**
     * @desc 指定光标与键盘的距离
     * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     * @desc 单位为 px
     * @desc 默认为 0
     */
    cursorSpacing: number;
    /**
     * @desc 是否获取焦点
     * @desc 默认为 false
     */
    focus: boolean;
    /**
     * @desc 是否自动聚焦，拉起键盘
     * @desc 默认为 false
     */
    autoFocus: boolean;
    /**
     * @desc 设置键盘右下角按钮的文字
     * @desc type="text" 时生效
     */
    confirmType: "send" | "search" | "next" | "go" | "done";
    /**
     * @desc 点击键盘右下角按钮时是否保持键盘不收起
     * @desc 默认为 false
     */
    confirmHold: boolean;
    /**
     * @desc 指定 focus 时的光标位置
     */
    cursor: number;
    /**
     * @desc 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
     * @desc 默认为 -1
     */
    selectionStart: number;
    /**
     * @desc 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
     * @desc 默认为 -1
     */
    selectionEnd: number;
    /**
     * @desc 键盘弹起时，是否自动上推页面
     * @desc 默认为 true
     */
    adjustPosition: boolean;
    /**
     * @desc 聚焦时，点击页面的时候是否不收起键盘
     * @desc 默认为 false
     */
    holdKeyboard: boolean;
    /**
     * @desc 键盘收起时，是否自动失焦
     * @desc 默认为 false
     */
    autoBlur: boolean;
    /**
     * @desc 是否忽略组件内对文本合成系统事件的处理
     * @desc 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
     * @desc 默认为 true
     */
    ignoreCompositionEvent: boolean;
    /**
     * @desc 是否强制 input 处于同层状态，仅在 iOS 生效
     * @desc 默认聚焦时 input 会切到非同层状态
     * @desc 默认为 false
     */
    alwaysEmbed: boolean;
    /**
     * @desc 安全键盘加密公钥的路径，只支持包内路径
     */
    safePasswordCertPath: string;
    /**
     * @desc 安全键盘输入密码长度
     */
    safePasswordLength: number;
    /**
     * @desc 安全键盘加密时间戳
     */
    safePasswordTimeStamp: number;
    /**
     * @desc 安全键盘加密盐值
     */
    safePasswordNonce: string;
    /**
     * @desc 安全键盘计算 hash 盐值，若指定 custom-hash 则无效
     */
    safePasswordSalt: string;
    /**
     * @desc 安全键盘计算 hash 的算法表达式
     */
    safePasswordCustomHash: string;
    /**
     * @desc 当 type 为 number、digit、idcard 时，数字键盘是否随机排列
     * @desc 默认为 false
     */
    randomNumber: boolean;
    /**
     * @desc 是否为受控组件
     * @desc 为 true 时，value 内容会完全受 setData 控制
     * @desc 默认为 false
     */
    controlled: boolean;
    /**
     * @desc 是否强制使用系统键盘和 Web-view 创建的 input 元素
     * @desc 为 true 时，confirm-type、confirm-hold 可能失效
     * @desc 默认为 false
     */
    alwaysSystem: boolean;
    /**
     * @desc 输入时触发
     */
    onInput: (event: TInputInputEvent) => string | void;
    /**
     * @desc 聚焦时触发
     */
    onFocus: (event: TInputFocusEvent) => void;
    /**
     * @desc 失焦时触发
     */
    onBlur: (event: TInputBlurEvent) => void;
    /**
     * @desc 点击完成按钮时触发
     */
    onConfirm: (event: TInputConfirmEvent) => void;
    /**
     * @desc 键盘高度变化时触发
     */
    onKeyboardheightchange: (event: TInputKeyboardheightchangeEvent) => void;
  },
  {}
>;

/**
 * @desc 用来改进表单组件的可用性
 * @desc 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
 * @desc for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
 */
type TLabel = TComponent<
  {
    /**
     * @desc 绑定控件的 id
     */
    for: string;
  },
  {}
>;

/**
 * @desc picker (selector) change 事件对象
 */
type TPickerSelectorChangeEvent = TEvent & {
  detail: {
    value: number;
  };
};
/**
 * @desc picker (multiSelector) change 事件对象
 */
type TPickerMultiSelectorChangeEvent = TEvent & {
  detail: {
    value: number[];
  };
};
/**
 * @desc picker (multiSelector) columnchange 事件对象
 */
type TPickerMultiSelectorColumnChangeEvent = TEvent & {
  detail: {
    column: number;
    value: number;
  };
};
/**
 * @desc picker (time) change 事件对象
 */
type TPickerTimeChangeEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc picker (date) change 事件对象
 */
type TPickerDateChangeEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc picker (region) change 事件对象
 */
type TPickerRegionChangeEvent = TEvent & {
  detail: {
    value: string[];
  };
};
/**
 * @desc 从底部弹起的滚动选择器，通过 mode 来区分
 */
type TPicker = TComponent<
  | {
      /**
       * @desc 在 form 中作为 key
       */
      name: string;
      /**
       * @desc 设置为普通选择器
       */
      mode?: "selector";
      /**
       * @desc 需要展示的内容
       * @desc 默认为 []
       */
      range: string[] | Record<string, any>[];
      /**
       * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
       */
      rangeKey: string;
      /**
       * @desc 当前选择的下标
       * @desc 默认为 0
       */
      value: number;
      /**
       * @desc 大屏时 UI 类型，支持 picker、select、auto
       * @desc 默认在 iPad 以 picker 样式展示
       * @desc 默认在 PC 以 select 样式展示
       * @desc 默认为 auto
       */
      selectorType: "auto" | "picker" | "select";
      /**
       * @desc 是否禁用
       * @desc 默认为 false
       */
      disabled: boolean;
      /**
       * @desc value 改变时触发
       */
      onChange: (event: TPickerSelectorChangeEvent) => void;
      /**
       * @desc 取消选择时触发
       */
      onCancel: (event: TEvent) => void;
    }
  | {
      /**
       * @desc 在 form 中作为 key
       */
      name: string;
      /**
       * @desc 设置为多列选择器
       */
      mode: "multiSelector";
      /**
       * @desc 需要展示的内容
       * @desc 默认为 []
       */
      range: string[][] | Record<string, any>[][];
      /**
       * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
       */
      rangeKey: string;
      /**
       * @desc 当前每列选择的下标
       * @desc 默认为列数个 0 组成的数组
       */
      value: number[];
      /**
       * @desc 是否禁用
       * @desc 默认为 false
       */
      disabled: boolean;
      /**
       * @desc value 改变时触发
       */
      onChange: (event: TPickerMultiSelectorChangeEvent) => void;
      /**
       * @desc 某一列 value 改变时触发
       */
      onColumnchange: (event: TPickerMultiSelectorColumnchangeEvent) => void;
      /**
       * @desc 取消选择时触发
       */
      onCancel: (event: TEvent) => void;
    }
  | {
      /**
       * @desc 在 form 中作为 key
       */
      name: string;
      /**
       * @desc 设置为时间选择器
       */
      mode: "time";
      /**
       * @desc 选中的日期
       * @desc 格式为 hh:mm
       */
      value: string;
      /**
       * @desc 有效日期范围的开始
       * @desc 格式为 hh:mm
       */
      start: string;
      /**
       * @desc 有效日期范围的结束
       * @desc 格式为 hh:mm
       */
      end: string;
      /**
       * @desc 是否禁用
       * @desc 默认为 false
       */
      disabled: boolean;
      /**
       * @desc value 改变时触发
       */
      onChange: (event: TPickerTimeChangeEvent) => void;
      /**
       * @desc 取消选择时触发
       */
      onCancel: (event: TEvent) => void;
    }
  | {
      /**
       * @desc 在 form 中作为 key
       */
      name: string;
      /**
       * @desc 设置为日期选择器
       */
      mode: "date";
      /**
       * @desc 选中的日期
       * @desc 格式为 YYYY-MM-DD
       */
      value: string;
      /**
       * @desc 有效日期范围的开始
       * @desc 格式为 YYYY-MM-DD
       */
      start: string;
      /**
       * @desc 有效日期范围的结束
       * @desc 格式为 YYYY-MM-DD
       */
      end: string;
      /**
       * @desc 选择器的粒度
       * @desc 默认为 day
       */
      fields: "year" | "month" | "day";
      /**
       * @desc 是否禁用
       * @desc 默认为 false
       */
      disabled: boolean;
      /**
       * @desc value 改变时触发
       */
      onChange: (event: TPickerDateChangeEvent) => void;
      /**
       * @desc 取消选择时触发
       */
      onCancel: (event: TEvent) => void;
    }
  | {
      /**
       * @desc 在 form 中作为 key
       */
      name: string;
      /**
       * @desc 设置为省市区选择器
       */
      mode: "region";
      /**
       * @desc 选中的省市区
       * @desc 默认选中每一列第一个值
       */
      value: string[];
      /**
       * @desc 可为每一列的顶部添加一个自定义的项
       */
      customItem: string;
      /**
       * @desc 是否禁用
       * @desc 默认为 false
       */
      disabled: boolean;
      /**
       * @desc value 改变时触发
       */
      onChange: (event: TPickerRegionChangeEvent) => void;
      /**
       * @desc 取消选择时触发
       */
      onCancel: (event: TEvent) => void;
    },
  {}
>;

/**
 * @desc picker-view change 事件对象
 */
type TPickerViewChangeEvent = TEvent & {
  detail: {
    value: number[];
  };
};
/**
 * @desc 嵌入页面的滚动选择器，比 picker 更灵活
 */
type TPickerView = TComponent<
  {
    /**
     * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
     * @desc 超出 picker-view-column 可选项长度时，选择最后一项
     */
    value: number[];
    /**
     * @desc 设置选择器中间选中框的样式
     */
    indicatorStyle: string;
    /**
     * @desc 设置选择器中间选中框的类名
     */
    indicatorClass: string;
    /**
     * @desc 设置蒙层的样式
     */
    maskStyle: string;
    /**
     * @desc 设置蒙层的类名
     */
    maskClass: string;
    /**
     * @desc 是否在手指松开时立即触发 change 事件
     * @desc 若不开启则会在滚动动画结束后触发 change 事件
     * @desc 默认为 false
     */
    immediateChange: boolean;
    /**
     * @desc value 改变时触发
     */
    onChange: (event: TPickerViewChangeEvent) => void;
    /**
     * @desc 滚动选择开始时触发
     */
    onPickstart: (event: TEvent) => void;
    /**
     * @desc 滚动选择结束时触发
     */
    onPickend: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc picker-view 直接子组件
 * @desc 子节点的高度会自动设置成与 picker-view 的选中框的高度一致
 */
type TPickerViewColumn = TComponent<{}, {}>;

/**
 * @desc radio-group change 事件对象
 */
type TRadioGroupChangeEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
type TRadioGroup = TComponent<
  {
    /**
     * @desc 选中项发生变化时触发
     */
    onChange: (event: TRadioGroupChangeEvent) => void;
  },
  {}
>;

/**
 * @desc 单选项目
 */
type TRadio = TComponent<
  {
    /**
     * @desc 在 form 中作为 key
     */
    name: string;
    /**
     * @desc radio 标识
     * @desc 被选中时，radio-group 的 change 事件会携带该 value
     */
    value: string;
    /**
     * @desc 当前是否选中
     * @desc 默认为 false
     */
    checked: boolean;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc radio 的颜色
     */
    color: string;
  },
  {}
>;

/**
 * @desc slider change 事件对象
 */
type TSliderChangeEvent = TEvent & {
  detail: {
    value: number;
  };
};
/**
 * @desc slider changing 事件对象
 */
type TSliderChangingEvent = TEvent & {
  detail: {
    value: number;
  };
};
/**
 * @desc 滑动选择器
 */
type TSlider = TComponent<
  {
    /**
     * @desc 在 form 中作为 key
     */
    name: string;
    /**
     * @desc 最小值
     * @desc 默认为 0
     */
    min: number;
    /**
     * @desc 最大值
     * @desc 默认为 100
     */
    max: number;
    /**
     * @desc 步长，取值必须大于 0，并且可被 (max - min) 整除
     * @desc 默认为 1
     */
    step: number;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 当前取值
     * @desc 默认为 0
     */
    value: number;
    /**
     * @desc 滑块左侧已选择部分的线条颜色
     * @desc 默认为各平台默认色
     */
    activeColor: string;
    /**
     * @desc 滑块右侧背景条的颜色
     * @desc 默认为 #e9e9e9
     */
    backgroundColor: string;
    /**
     * @desc 滑块的大小
     * @desc 取值范围为 12 - 28
     * @desc 默认为 28
     */
    blockSize: number;
    /**
     * @desc 滑块的颜色
     * @desc 默认为 #fff
     */
    blockColor: string;
    /**
     * @desc 是否显示当前 value
     * @desc 默认为 false
     */
    showValue: boolean;
    /**
     * @desc 完成一次拖动后触发
     */
    onChange: (event: TSliderChangeEvent) => void;
    /**
     * @desc 拖动过程中触发
     */
    onChanging: (event: TSliderChangingEvent) => void;
  },
  {}
>;

/**
 * @desc switch change 事件对象
 */
type TSwitchChangeEvent = TEvent & {
  detail: {
    value: boolean;
  };
};
/**
 * @desc 开关选择器
 */
type TSwitch = TComponent<
  {
    /**
     * @desc 在 form 中作为 key
     */
    name: string;
    /**
     * @desc 是否选中
     * @desc 默认为 false
     */
    checked: boolean;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 样式
     */
    type: "switch" | "checkbox";
    /**
     * @desc switch 的颜色
     */
    color: string;
    /**
     * @desc checked 改变时触发
     */
    onChange: (event: TSwitchChangeEvent) => void;
  },
  {}
>;

/**
 * @desc textarea focus 事件对象
 */
type TTextareaFocusEvent = TEvent & {
  detail: {
    value: string;
    height: number;
  };
};
/**
 * @desc textarea blur 事件对象
 */
type TTextareaBlurEvent = TEvent & {
  detail: {
    value: string;
    cursor: number;
  };
};
/**
 * @desc textarea linechange 事件对象
 */
type TTextareaLinechangeEvent = TEvent & {
  detail: {
    height: number;
    heightRpx: number;
    lineCount: number;
  };
};
/**
 * @desc textarea input 事件对象
 */
type TTextareaInputEvent = TEvent & {
  detail: {
    value: string;
    cursor: number;
  };
};
/**
 * @desc textarea confirm 事件对象
 */
type TTextareaConfirmEvent = TEvent & {
  detail: {
    value: string;
  };
};
/**
 * @desc textarea keyboardheightchange 事件对象
 */
type TTextareaKeyboardheightchangeEvent = TEvent & {
  detail: {
    height: number;
    duration: number;
  };
};
/**
 * @desc 多行输入框
 */
type TTextarea = TComponent<
  {
    /**
     * @desc 输入框的内容
     */
    value: string;
    /**
     * @desc 输入框为空时占位符
     */
    placeholder: string;
    /**
     * @desc 指定 placeholder 的样式
     */
    placeholderStyle: string;
    /**
     * @desc 指定 placeholder 的样式类
     * @desc 默认为 textarea-placeholder
     */
    placeholderClass: string;
    /**
     * @desc 是否禁用
     * @desc 默认为 false
     */
    disabled: boolean;
    /**
     * @desc 最大输入长度，设置为 -1 的时候不限制最大长度
     * @desc 默认为 140
     */
    maxlength: number;
    /**
     * @desc 是否获取焦点
     * @desc 默认为 false
     */
    focus: boolean;
    /**
     * @desc 是否自动聚焦，拉起键盘
     * @desc 默认为 false
     */
    autoFocus: boolean;
    /**
     * @desc 是否自动增高
     * @desc 设置时，样式里的 height 不生效
     * @desc 默认为 false
     */
    autoHeight: boolean;
    /**
     * @desc 如果 textarea 在 position: fixed 的区域内，需要指定为 true
     * @desc 默认为 false
     */
    fixed: boolean;
    /**
     * @desc 指定光标与键盘的距离
     * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     * @desc 单位为 px
     * @desc 默认为 0
     */
    cursorSpacing: number;
    /**
     * @desc 指定 focus 时的光标位置
     */
    cursor: number;
    /**
     * @desc 设置键盘右下角按钮的文字
     * @desc 默认为 done
     */
    confirmType: "send" | "search" | "next" | "go" | "done";
    /**
     * @desc 点击键盘右下角按钮时是否保持键盘不收起
     * @desc 默认为 false
     */
    confirmHold: boolean;
    /**
     * @desc 是否显示键盘上方带有”完成“按钮那一栏
     * @desc 默认为 true
     */
    showConfirmBar: boolean;
    /**
     * @desc 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
     * @desc 默认为 -1
     */
    selectionStart: number;
    /**
     * @desc 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
     * @desc 默认为 -1
     */
    selectionEnd: number;
    /**
     * @desc 键盘弹起时，是否自动上推页面
     * @desc 默认为 true
     */
    adjustPosition: boolean;
    /**
     * @desc 是否去掉 iOS 下的默认内边距
     * @desc 默认为 false
     */
    disableDefaultPadding: boolean;
    /**
     * @desc 聚焦时点击页面的时候是否不收起键盘
     * @desc 默认为 false
     */
    holdKeyboard: boolean;
    /**
     * @desc 键盘收起时是否自动失焦
     * @desc 默认为 false
     */
    autoBlur: boolean;
    /**
     * @desc 是否忽略组件内对文本合成系统事件的处理
     * @desc 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
     * @desc 默认为 true
     */
    ignoreCompositionEvent: boolean;
    /**
     * @desc 聚焦时触发
     */
    onFocus: (event: TTextareaFocusEvent) => void;
    /**
     * @desc 失焦时触发
     */
    onBlur: (event: TTextareaBlurEvent) => void;
    /**
     * @desc 输入框行数变化时触发
     */
    onLinechange: (event: TTextareaLinechangeEvent) => void;
    /**
     * @desc 输入时触发
     */
    onInput: (event: TTextareaInputEvent) => string | void;
    /**
     * @desc 点击完成按钮时触发
     */
    onConfirm: (event: TTextareaConfirmEvent) => void;
    /**
     * @desc 键盘高度变化时触发
     */
    onKeyboardheightchange: (event: TTextareaKeyboardheightchangeEvent) => void;
  },
  {}
>;

/**
 * @desc 页面跳转
 */
type TNavigator = TComponent<
  {
    /**
     * @desc 应用内的跳转链接
     * @desc 值为相对路径或绝对路径
     * @desc 例子：../first/first、/pages/first/first
     */
    url: string;
    /**
     * @desc 跳转方式
     */
    openType:
      | "navigate"
      | "redirect"
      | "switchTab"
      | "reLaunch"
      | "navigateBack"
      | "exit";
    /**
     * @desc 回退的层数
     * @desc open-type="navigateBack" 时有效
     * @desc 默认为 1
     */
    delta: number;
    /**
     * @desc 窗口的显示/关闭的动画类型
     * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
     * @desc 默认为 pop-in 显示、pop-out 关闭
     */
    animationType:
      | "slide-in-right"
      | "slide-out-right"
      | "slide-in-left"
      | "slide-out-left"
      | "slide-in-top"
      | "slide-out-top"
      | "slide-in-bottom"
      | "slide-out-bottom"
      | "pop-in"
      | "pop-out"
      | "fade-in"
      | "fade-out"
      | "zoom-in"
      | "zoom-out"
      | "zoom-fade-in"
      | "zoom-fade-out"
      | "none";
    /**
     * @desc 窗口的显示/关闭动画的持续时间
     * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
     * @desc 默认为 300
     */
    animationDuration: number;
    /**
     * @desc 指定点击时的样式类
     * @desc hover-class="none" 时，没有点击态效果
     * @desc 默认为 navigator-hover
     */
    hoverClass: string;
    /**
     * @desc 指定是否阻止本节点的祖先节点出现点击态
     * @desc 默认为 false
     */
    hoverStopPropagation: boolean;
    /**
     * @desc 按住后多久出现点击态
     * @desc 单位为 ms
     * @desc 默认为 50
     */
    hoverStartTime: number;
    /**
     * @desc 手指松开后点击态保留时间
     * @desc 单位为 ms
     * @desc 默认为 600
     */
    hoverStayTime: number;
    /**
     * @desc 在哪个目标上发生跳转
     * @desc 默认为 self
     */
    target: "self" | "miniProgram";
    /**
     * @desc 要打开的小程序 appId
     * @desc target="miniProgram" 时有效
     */
    appId: string;
    /**
     * @desc 打开的页面路径，如果为空则打开首页
     * @desc target="miniProgram" 时有效
     */
    path: string;
    /**
     * @desc 需要传递给目标应用的数据
     * @desc target="miniProgram" 时有效
     */
    extraData: Record<string, any>;
    /**
     * @desc 要打开的小程序版本
     * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
     * @desc target="miniProgram" 时有效
     * @desc 默认为 release
     */
    version: "develop" | "trial" | "release";
    /**
     * @desc 当传递该参数后，可以不传 app-id 和 path
     * @desc target="miniProgram" 时有效
     */
    shortLink: string;
  },
  {}
>;

/**
 * @desc audio error 事件对象
 */
type TAudioErrorEvent = TEvent & {
  detail: {
    errMsg: number;
  };
};
/**
 * @desc audio timeupdate 事件对象
 */
type TAudioTimeupdateEvent = TEvent & {
  detail: {
    currentTime: number;
    duration: number;
  };
};
/**
 * @desc 音频
 */
type TAudio = TComponent<
  {
    /**
     * @desc audio 组件的唯一标识符
     */
    id: string;
    /**
     * @desc 要播放音频的资源地址
     */
    src: string;
    /**
     * @desc 是否循环播放
     * @desc 默认为 false
     */
    loop: boolean;
    /**
     * @desc 是否显示默认控件
     * @desc 默认为 false
     */
    controls: boolean;
    /**
     * @desc 默认控件上的音频封面的图片资源地址
     * @desc 如果 controls 值为 false 则无效
     */
    poster: string;
    /**
     * @desc 默认控件上的音频名字
     * @desc 如果 controls 值为 false 则无效
     * @desc 默认为“未知音频”
     */
    name: string;
    /**
     * @desc 默认控件上的作者名字
     * @desc 如果 controls 值为 false 则无效
     * @desc 默认为“未知作者”
     */
    author: string;
    /**
     * @desc 发生错误时触发
     */
    onError: (event: TAudioErrorEvent) => void;
    /**
     * @desc 开始/继续播放时触发
     */
    onPlay: (event: TEvent) => void;
    /**
     * @desc 暂停播放时触发
     */
    onPause: (event: TEvent) => void;
    /**
     * @desc 播放进度改变时触发
     */
    onTimeupdate: (event: TAudioTimeupdateEvent) => void;
    /**
     * @desc 播放到末尾时触发
     */
    onEnded: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc camera initdone 事件对象
 */
type TCameraInitdoneEvent = TEvent & {
  detail: {
    maxZoom: number;
  };
};
/**
 * @desc 页面内嵌的区域相机组件
 */
type TCamera = TComponent<
  {
    /**
     * @desc 应用模式，不支持动态修改
     * @desc 默认为 normal
     */
    mode: "normal" | "scanCode";
    /**
     * @desc 分辨率，不支持动态修改
     * @desc 默认为 medium
     */
    resolution: "low" | "medium" | "high";
    /**
     * @desc 摄像头朝向
     * @desc 默认为 back
     */
    devicePosition: "front" | "back";
    /**
     * @desc 闪光灯
     * @desc 默认为 auto
     */
    flash: "auto" | "on" | "off" | "torch";
    /**
     * @desc 期望的相机帧数据尺寸
     * @desc 默认为 medium
     */
    frameSize: "small" | "medium" | "large";
    /**
     * @desc 摄像头在非正常终止时触发
     */
    onStop: (event: TEvent) => void;
    /**
     * @desc 用户不允许使用摄像头时触发
     */
    onError: (event: TEvent) => void;
    /**
     * @desc 相机初始化完成时触发
     */
    onInitdone: (event: TCameraInitdoneEvent) => void;
    /**
     * @desc 扫码识别成功时触发
     * @desc mode="scanCode" 时生效
     */
    onScancode: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc image load 事件对象
 */
type TImageLoadEvent = TEvent & {
  height: string;
  width: string;
};
/**
 * @desc 图片
 */
type TImage = TComponent<
  {
    /**
     * @desc 图片资源地址
     */
    src: string;
    /**
     * @desc 图片裁剪、缩放的模式
     * @desc 默认为 scaleToFill
     */
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
    /**
     * @desc 是否开启图片懒加载
     * @desc 只对 page 与 scroll-view 下的 image 有效
     * @desc 默认为 false
     */
    lazyLoad: boolean;
    /**
     * @desc 是否使用图片显示动画效果
     * @desc 默认为 true
     */
    fadeShow: boolean;
    /**
     * @desc 在系统不支持 webp 的情况下是否单独启用 webp
     * @desc 默认为 false
     */
    webp: boolean;
    /**
     * @desc 是否开启长按图片显示识别小程序码菜单
     * @desc 默认为 false
     */
    showMenuByLongpress: boolean;
    /**
     * @desc 是否能拖动图片
     * @desc 默认为 true
     */
    draggable: boolean;
    /**
     * @desc 图片加载错误时触发
     */
    onError: (event: TEvent) => void;
    /**
     * @desc 图片加载完毕时触发
     */
    onLoad: (event: TImageLoadEvent) => void;
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
    Swiper: TSwiper;
    SwiperItem: TSwiperItem;
    MatchMedia: TMatchMedia;
    MovableArea: TMovableArea;
    MovableView: TMovableView;
    CoverView: TCoverView;
    CoverImage: TCoverImage;

    Icon: TIcon;
    Text: TText;
    RichText: TRichText;
    Progress: TProgress;

    Button: TButton;
    CheckboxGroup: TCheckboxGroup;
    Checkbox: TCheckbox;
    Editor: TEditor;
    Form: TForm;
    Input: TInput;
    Label: TLabel;
    Picker: TPicker;
    PickerView: TPickerView;
    PickerViewColumn: TPickerViewColumn;
    RadioGroup: TRadioGroup;
    Radio: TRadio;
    Slider: TSlider;
    Switch: TSwitch;
    Textarea: TTextarea;

    Navigator: TNavigator;

    Audio: TAudio;
    Camera: TCamera;
    Image: TImage;
    Video: TVideo;
    LivePlayer: TLivePlayer;
    LivePusher: TLivePusher;

    Map: TMap;

    Canvas: TCanvas;

    WebView: TWebView;

    Ad: TAd;
    AdDraw: TAdDraw;

    UnicloudDb: TUnicloudDb;

    PageMeta: TPageMeta;
    NavigationBar: TNavigationBar;
    CustomTabBar: TCustomTabBar;

    Barcode: TBarcode;
    List: TList;
    Cell: TCell;
    RecycleList: TRecycleList;
    Waterfall: TWaterfall;
    Refresh: TRefresh;

    OpenData: TOpenData;
  }
}
