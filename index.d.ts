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
     * @desc 只在初始化时有效，不支持动态修改
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
     * @desc 只在初始化时有效，不支持动态修改
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
     * @desc type="text" 时有效
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
     * @desc mode="scanCode" 时有效
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

/**
 * @desc video timeupdate 事件对象
 */
type TVideoTimeupdateEvent = TEvent & {
  detail: {
    currentTime: number;
    duration: number;
  };
};
/**
 * @desc video fullscreenchange 事件对象
 */
type TVideoFullscreenchangeEvent = TEvent & {
  detail: {
    fullScreen: boolean;
    direction: "vertical" | "horizontal";
  };
};
/**
 * @desc video progress 事件对象
 */
type TVideoProgressEvent = TEvent & {
  detail: {
    buffered: number;
  };
};
/**
 * @desc video loadedmetadata 事件对象
 */
type TVideoLoadedmetadataEvent = TEvent & {
  detail: {
    width: number;
    height: number;
    duration: number;
  };
};
/**
 * @desc video fullscreenclick 事件对象
 */
type TVideoFullscreenclickEvent = TEvent & {
  detail: {
    screenX: number;
    screenY: number;
    screenWidth: number;
    screenHeight: number;
  };
};
/**
 * @desc video controlstoggle 事件对象
 */
type TVideoControlstoggleEvent = TEvent & {
  detail: {
    show: boolean;
  };
};
/**
 * @desc 视频播放组件
 */
type TVideo = TComponent<
  {
    /**
     * @desc 要播放视频的资源地址
     */
    src: string;
    /**
     * @desc 是否自动播放
     * @desc 默认为 false
     */
    autoplay: boolean;
    /**
     * @desc 是否循环播放
     * @desc 默认为 false
     */
    loop: boolean;
    /**
     * @desc 是否静音播放
     * @desc 默认为 false
     */
    muted: boolean;
    /**
     * @desc 指定视频初始播放位置
     * @desc 单位为 s
     */
    initialTime: number;
    /**
     * @desc 指定视频长度
     * @desc 单位为 s
     */
    duration: number;
    /**
     * @desc 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
     * @desc 默认为 true
     */
    controls: boolean;
    /**
     * @desc 弹幕列表
     */
    danmuList: { text: string; color: string; time: number }[];
    /**
     * @desc 是否显示弹幕按钮，不支持动态修改
     * @desc 默认为 false
     */
    danmuBtn: boolean;
    /**
     * @desc 是否展示弹幕，不支持动态修改
     * @desc 默认为 false
     */
    enableDanmu: boolean;
    /**
     * @desc 在非全屏模式下，是否开启亮度与音量调节手势
     * @desc 默认为 false
     */
    pageGesture: boolean;
    /**
     * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
     */
    direction: 0 | 90 | -90;
    /**
     * @desc 若不设置，宽度大于 240 时才会显示
     * @desc 默认为 true
     */
    showProgress: boolean;
    /**
     * @desc 是否显示全屏按钮
     * @desc 默认为 true
     */
    showFullscreenBtn: boolean;
    /**
     * @desc 是否显示视频底部控制栏的播放按钮
     * @desc 默认为 true
     */
    showPlayBtn: boolean;
    /**
     * @desc 是否显示视频中间的播放按钮
     * @desc 默认为 true
     */
    showCenterPlayBtn: boolean;
    /**
     * @desc 是否显示 loading 控件
     * @desc 默认为 true
     */
    showLoading: boolean;
    /**
     * @desc 是否开启控制进度的手势
     * @desc 默认为 true
     */
    enableProgressGesture: boolean;
    /**
     * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
     */
    objectFit: "contain" | "fill" | "cover";
    /**
     * @desc 视频封面的图片网络资源地址
     * @desc 如果 controls 值为 false 则无效
     */
    poster: string;
    /**
     * @desc 是否显示静音按钮
     * @decs 默认为 false
     */
    showMuteBtn: boolean;
    /**
     * @desc 视频的标题，全屏时在顶部展示
     */
    title: string;
    /**
     * @desc 播放按钮的位置
     * @desc 默认为 bottom
     */
    playBtnPosition: "bottom" | "center";
    /**
     * @desc 移动网络提醒样式
     * @desc 默认为 1
     */
    mobilenetHintType: 0 | 1;
    /**
     * @desc 是否开启播放手势，即双击切换播放、暂停
     * @desc 默认为 false
     */
    enablePlayGesture: boolean;
    /**
     * @desc 当跳转到其它小程序页面时，是否自动暂停本页面的视频
     * @desc 默认为 true
     */
    autoPauseIfNavigate: boolean;
    /**
     * @desc 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
     * @desc 默认为 true
     */
    autoPauseIfOpenNative: boolean;
    /**
     * @desc 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）
     * @desc 默认为 false
     */
    vslideGesture: boolean;
    /**
     * @desc 在全屏模式下，是否开启亮度与音量调节手势
     * @desc 默认为 true
     */
    vslideGestureInFullscreen: boolean;
    /**
     * @desc 视频前贴广告单元ID
     */
    adUnitId: string;
    /**
     * @desc 用于给搜索等场景作为视频封面展示
     * @desc 建议使用无播放 icon 的视频封面图
     * @desc 只支持网络地址
     */
    posterForCrawler: string;
    /**
     * @desc 解码器选择
     * @desc 默认为 hardware
     */
    codec: "hardware" | "software";
    /**
     * @desc 是否对 http、https 视频源开启本地缓存
     * @desc 默认为 true
     */
    httpCache: boolean;
    /**
     * @desc 播放策略
     * @desc 默认为 0
     */
    playStrategy: 0 | 1 | 2;
    /**
     * @desc HTTP 请求 Header
     */
    header: Record<string, any>;
    /**
     * @desc 开始/继续播放时触发
     */
    onPlay: (event: TEvent) => void;
    /**
     * @desc 暂停播放时触发
     */
    onPause: (event: TEvent) => void;
    /**
     * @desc 播放到末尾时触发
     */
    onEnded: (event: TEvent) => void;
    /**
     * @desc 播放进度变化时触发
     */
    onTimeupdate: (event: TVideoTimeupdateEvent) => void;
    /**
     * @desc 视频进入和退出全屏时触发
     */
    onFullscreenchange: (event: TVideoFullscreenchangeEvent) => void;
    /**
     * @desc 视频缓冲时触发
     */
    onWaiting: (event: TEvent) => void;
    /**
     * @desc 视频播放出错时触发
     */
    onError: (event: TEvent) => void;
    /**
     * @desc 加载进度变化时触发
     */
    onProgress: (event: TVideoProgressEvent) => void;
    /**
     * @desc 视频资源开始加载时触发
     */
    onLoadeddata: (event: TEvent) => void;
    /**
     * @desc 开始加载数据时触发
     */
    onLoadstart: (event: TEvent) => void;
    /**
     * @desc 拖动进度条结束时触发
     */
    onSeeked: (event: TEvent) => void;
    /**
     * @desc 拖动进度条时触发
     */
    onSeeking: (event: TEvent) => void;
    /**
     * @desc 视频元数据加载完成时触发
     */
    onLoadedmetadata: (event: TVideoLoadedmetadataEvent) => void;
    /**
     * @desc 视频播放全屏播放点击时触发
     */
    onFullscreenclick: (event: TVideoFullscreenclickEvent) => void;
    /**
     * @desc 切换 controls 显示隐藏时触发
     */
    onControlstoggle: (event: TVideoControlstoggleEvent) => void;
  },
  {}
>;

/**
 * @desc live-player statechage 事件对象
 */
type TLivePlayerStatechangeEvent = TEvent & {
  detail: {
    code: number;
  };
};
/**
 * @desc live-player netstatus 事件对象
 */
type TLivePlayerNetstatusEvent = TEvent & {
  detail: {
    info: {
      videoBitrate: number;
      audioBitrate: number;
      videoFPS: number;
      videoGOP: number;
      netSpeed: number;
      netJitter: number;
      netQualityLevel: number;
      videoWidth: number;
      videoHeight: number;
      videoCache: number;
      audioCache: number;
      vDecCacheSize: number;
      vSumCacheSize: number;
      avPlayInterval: number;
      avRecvInterval: number;
      audioCacheThreshold: number;
    };
  };
};
/**
 * @desc live-player fullscreenchagne 事件对象
 */
type TLivePlayerFullscreenchangeEvent = TEvent & {
  detail: {
    direction: "vertical" | "horizontal";
    fullScreen: boolean;
  };
};
/**
 * @desc 实时音视频播放（直播拉流）
 */
type TLivePlayer = TComponent<
  {
    /**
     * @desc 唯一标志符
     */
    id: string;
    /**
     * @desc 音视频地址
     */
    src: string;
    /**
     * @desc 实时模式
     * @desc 默认为 live
     */
    mode: "live" | "RTC";
    /**
     * @desc 是否自动播放
     * @desc 默认为 false
     */
    autoplay: boolean;
    /**
     * @desc 是否静音
     * @desc 默认为 false
     */
    muted: boolean;
    /**
     * @desc 画面方向
     * @desc 默认为 vertical
     */
    orientation: "vertical" | "horizontal";
    /**
     * @desc 填充模式
     * @desc 默认为 contain
     */
    objectFit: "contain" | "fillCrop";
    /**
     * @desc 进入后台时是否静音
     * @desc 默认为 false
     */
    backgroundMute: boolean;
    /**
     * @desc 声音输出方式
     * @desc 默认为 speaker
     */
    soundMode: "speaker" | "ear";
    /**
     * @desc 最小缓冲区
     * @desc 单位为 s
     * @desc 默认为 1
     */
    minCache: string;
    /**
     * @desc 最大缓冲区
     * @desc 单位为 s
     * @desc 默认为 3
     */
    maxCache: string;
    /**
     * @desc 设置小窗模式，空字符串或通过数组形式设置多种模式
     */
    pictureInPictureMode:
      | "push"
      | "pop"
      | []
      | ["push", "pop"]
      | ["pop", "push"]
      | ["push"]
      | ["pop"];
    /**
     * @desc 播放状态变化时触发
     */
    onStatechange: (event: TLivePlayerStatechangeEvent) => void;
    /**
     * @desc 网络状态变化时触发
     */
    onNetstatus: (event: TLivePlayerNetstatusEvent) => void;
    /**
     * @desc 全屏变化时触发
     */
    onFullscreenchange: (event: TLivePlayerFullscreenchangeEvent) => void;
    /**
     * @desc 播放音量变化时触发
     */
    onAudiovolumenotify: (event: TEvent) => void;
    /**
     * @desc 播放器进入小窗时触发
     */
    onEnterpictureinpicture: (event: TEvent) => void;
    /**
     * @desc 播放器退出小窗时触发
     */
    onLeavepictureinpicture: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc live-pusher statechage 事件对象
 */
type TLivePusherStatechangeEvent = TEvent & {
  detail: {
    code: number;
  };
};
/**
 * @desc live-pusher netstatus 事件对象
 */
type TLivePusherNetstatusEvent = TEvent & {
  detail: {
    info: {
      videoBitrate: number;
      audioBitrate: number;
      videoFPS: number;
      videoGOP: number;
      netSpeed: number;
      netJitter: number;
      netQualityLevel: number;
      videoWidth: number;
      videoHeight: number;
      videoCache: number;
      audioCache: number;
      vDecCacheSize: number;
      vSumCacheSize: number;
      avPlayInterval: number;
      avRecvInterval: number;
      audioCacheThreshold: number;
    };
  };
};
/**
 * @desc live-pusher error 事件对象
 */
type TLivePushErrorEvent = TEvent & {
  detail: {
    errMsg: string;
    errCode: number;
  };
};
/**
 * @desc live-pusher bgmprogress 事件对象
 */
type TLivePushBgmprogressEvent = TEvent & {
  detail: {
    direction: "vertical" | "horizontal";
    fullScreen: boolean;
  };
};
/**
 * @desc 实时音视频录制（直播推流）
 */
type TLivePusher = TComponent<
  {
    /**
     * @desc 推流地址，支持 RTMP 协议
     */
    url: string;
    /**
     * @desc 推流视频模式
     * @desc 默认为 SD
     */
    mode: "SD" | "HD" | "FHD";
    /**
     * @desc 是否自动推流
     * @desc 默认为 false
     */
    autopush: boolean;
    /**
     * @desc 视频宽高比例
     * @desc 默认为 3:2
     */
    aspect: number;
    /**
     * @desc 是否静音
     * @desc 默认为 false
     */
    muted: boolean;
    /**
     * @desc 是否开启摄像头
     * @desc 默认为 true
     */
    enableCamera: boolean;
    /**
     * @desc 自动聚焦
     * @desc 默认为 true
     */
    autoFocus: boolean;
    /**
     * @desc 美颜
     * @desc 取值范围为 0 - 9
     * @desc 默认为 0
     */
    beauty: number;
    /**
     * @desc 美白
     * @desc 取值范围为 0 - 9
     * @desc 默认为 0
     */
    whiteness: number;
    /**
     * @desc 画面方向
     * @desc 默认为 vertical
     */
    orientation: "vertical" | "horizontal";
    /**
     * @desc 最小码率
     * @desc 默认为 200
     */
    minBitrate: number;
    /**
     * @desc 最大码率
     * @desc 默认为 1000
     */
    maxBitrate: number;
    /**
     * @desc 音质
     * @desc 默认为 high
     */
    audioQuality: "high" | "low";
    /**
     * @desc 进入后台时推流的等待画面
     */
    waitingImage: string;
    /**
     * @desc 等待画面资源的 MD5 值
     */
    waitingImageMd5: string;
    /**
     * @desc 是否调整焦距
     * @desc 默认为 false
     */
    zoom: boolean;
    /**
     * @desc 摄像头朝向
     * @desc 默认为 front
     */
    devicePosition: "front" | "back";
    /**
     * @desc 进入后台时是否静音
     * @desc 默认为 false
     */
    backgroundMute: boolean;
    /**
     * @desc 设置推流画面是否镜像，产生的效果在 live-player 呈现
     * @desc 默认为 false
     */
    remoteMirror: boolean;
    /**
     * @desc 控制本地预览画面是否镜像
     * @desc 默认为 auto
     */
    localMirror: "auto" | "enable" | "disable";
    /**
     * @desc 音频混响类型
     * @desc 默认为 0
     */
    audioReverbType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    /**
     * @desc 是否开启麦克风
     * @desc 默认为 true
     */
    enableMic: boolean;
    /**
     * @desc 是否开启音频自动增益
     * @desc 默认为 false
     */
    enableAgc: boolean;
    /**
     * @desc 是否开启音频噪声抑制
     * @desc 默认为 false
     */
    enableAns: boolean;
    /**
     * @desc 音量类型
     * @desc 默认为 auto
     */
    audioVolumeType: "auto" | "media" | "voicecall";
    /**
     * @desc 播放状态变化时触发
     */
    onStatechange: (event: TLivePusherStatechangeEvent) => void;
    /**
     * @desc 网络状态变化时触发
     */
    onNetstatus: (event: TLivePusherNetstatusEvent) => void;
    /**
     * @desc 渲染错误时触发
     */
    onError: (event: TLivePushErrorEvent) => void;
    /**
     * @desc 背景音开始播放时触发
     */
    onBgmstart: (event: TEvent) => void;
    /**
     * @desc 背景音进度变化时触发
     */
    onBgmprogress: (event: TLivePushBgmprogressEvent) => void;
    /**
     * @desc 背景音播放完成时触发
     */
    onBgmcomplete: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc map markertap 事件对象
 */
type TMapMarkertapEvent = TEvent & {
  detail: {
    markerId: number;
  };
};
/**
 * @desc map labeltap 事件对象
 */
type TMapLabeltapEvent = TEvent & {
  detail: {
    markerId: number;
  };
};
/**
 * @desc map callouttap 事件对象
 */
type TMapCallouttapEvent = TEvent & {
  detail: {
    markerId: number;
  };
};
/**
 * @desc map controltap 事件对象
 */
type TMapControltapEvent = TEvent & {
  detail: {
    controlId: number;
  };
};
/**
 * @desc map anchorpointtap 事件对象
 */
type TMapAnchorpointtapEvent = TEvent & {
  detail: {
    longitude: number;
    latitude: number;
  };
};
/**
 * @desc map poitap 事件对象
 */
type TMapPoitapEvent = TEvent & {
  detail: {
    name: string;
    longitude: number;
    latitude: number;
  };
};
/**
 * @desc 地图组件，用于展示地图
 */
type TMap = TComponent<
  {
    /**
     * @desc 中心经度
     */
    longitude: number;
    /**
     * @desc 中心纬度
     */
    latitude: number;
    /**
     * @desc 缩放级别
     * @desc 取值范围为 3 - 20
     * @desc 默认为 16
     */
    scale: number;
    /**
     * @desc 主题，仅 Android 支持，不支持动态修改
     * @desc 默认为 normal
     */
    theme: "normal" | "satellite";
    /**
     * @desc 最小缩放级别
     * @desc 默认为 3
     */
    minScale: number;
    /**
     * @desc 最大缩放级别
     * @desc 默认为 20
     */
    maxScale: number;
    /**
     * @desc 个性化地图配置的 style，不支持动态修改
     * @desc 默认为 1
     */
    layerStyle: number | string;
    /**
     * @desc 标记点
     */
    markers: {
      id: number;
      latitude: number;
      longitude: number;
      title: string;
      iconPath: string;
      rotate: number;
      alpha: number;
      width: number;
      height: number;
      callout: {
        content: string;
        color: string;
        fontSize: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        bgColor: string;
        padding: number;
        display: "BYCLICK" | "ALWAYS";
        textAlign: "left" | "right" | "center";
      };
      label: {
        content: string;
        color: string;
        fontSize: number;
        x: number;
        y: number;
        anchorX: number;
        anchorY: number;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        bgColor: string;
        padding: number;
        textAlign: "left" | "right" | "center";
        customCallout: {
          display: "BYLCICK" | "ALWAYS";
        };
        ariaLabel: string;
        joinCluster: boolean;
      };
    }[];
    /**
     * @desc 路线，指定一系列坐标点，从数组第一项连线至最后一项
     */
    polyline: {
      points: { latitude: number; longitude: number }[];
      color: string;
      width: number;
      dottedLie: boolean;
      arrowLine: boolean;
      arrowIconPath: string;
      borderColor: string;
      borderWidth: number;
      colorList: string[];
      level: "abovelabels" | "abovebuildings" | "aboveroads";
    }[];
    /**
     * @desc 圆，在地图上显示圆
     */
    circles: {
      latitude: number;
      longitude: number;
      color: string;
      fillColor: string;
      radius: number;
      strokeWidth: number;
      level: "abovelabels" | "abovebuildings" | "aboveroads";
    }[];
    /**
     * @desc 控件，不随着地图移动
     */
    controls: {
      id: number;
      position: {
        left: number;
        top: number;
        width: number;
        height: number;
      };
      iconPath: string;
      clickable: boolean;
    }[];
    /**
     * @desc 缩放视野以包含所有给定的坐标点
     */
    includePoints: { latitude: number; longitude: number }[];
    /**
     * @desc 是否显示 3D 楼块
     * @desc 默认为 false
     */
    enable3D: boolean;
    /**
     * @desc 是否显示指南针
     * @desc 默认为 false
     */
    showCompass: boolean;
    /**
     * @desc 是否支持缩放
     * @dsec 默认为 true
     */
    enableZoom: boolean;
    /**
     * @desc 是否支持拖动
     * @desc 默认为 true
     */
    enableScroll: boolean;
    /**
     * @desc 是否支持旋转
     * @desc 默认为 false
     */
    enableRotate: boolean;
    /**
     * @desc 是否开启俯视
     * @desc 默认为 false
     */
    enableOverlooking: boolean;
    /**
     * @desc 是否开启卫星图
     * @desc 默认为 false
     */
    enableSatellite: boolean;
    /**
     * @desc 是否开启实时路况
     * @desc 默认为 false
     */
    enableTraffice: boolean;
    /**
     * @desc 是否展示 POI 点
     * @desc 默认为 false
     */
    enablePoi: boolean;
    /**
     * @desc 是否展示建筑物
     * @desc 默认为 false
     */
    enableBuilding: false;
    /**
     * @desc 是否显示带有方向的当前定位点
     * @desc 默认为 false
     */
    showLocation: boolean;
    /**
     * @desc 多边形，指定一系列坐标点，生成闭合多边形
     */
    polygons: {
      points: { latitude: number; longitude: number }[];
      strokeWidth: number;
      strokeColor: string;
      fillColor: string;
      zIndex: number;
      level: "abovelabels" | "abovebuildings" | "aboveroads";
    }[];
    /**
     * @desc 是否展示室内地图
     * @desc 默认为 false
     */
    enableIndoorMap: boolean;
    /**
     * @desc 点击标记点时触发
     */
    onMarkertap: (event: TMapMarkertapEvent) => void;
    /**
     * @desc 点击 label 时触发
     */
    onLabeltap: (event: TMapLabeltapEvent) => void;
    /**
     * @desc 点击标记点对应的气泡时触发
     */
    onCallouttap: (event: TMapCallouttapEvent) => void;
    /**
     * @desc 点击控件时触发
     */
    onControltap: (event: TMapControltapEvent) => void;
    /**
     * @desc 视野发生变化时触发
     */
    onRegionchange: (event: TEvent) => void;
    /**
     * @desc 点击地图时触发
     */
    onTap: (event: TEvent) => void;
    /**
     * @desc 地图渲染更新完成时触发
     */
    onUpdated: (event: TEvent) => void;
    /**
     * @desc 点击定位标时触发
     */
    onAnchorpointtap: (event: TMapAnchorpointtapEvent) => void;
    /**
     * @desc 点击地图 poi 点时触发
     */
    onPoitap: (event: TMapPoitapEvent) => void;
  },
  {}
>;

/**
 * @desc canvas error 事件对象
 */
type TCanvasErrorEvent = TEvent & {
  detail: {
    errMsg: string;
  };
};
/**
 * @desc 画布
 */
type TCanvas = TComponent<
  {
    /**
     * @desc canvas 类型
     */
    type: "2d" | "webgl";
    /**
     * @desc 唯一标识符
     */
    canvasId: string;
    /**
     * @desc 当在 canvas 中移动时且有绑定手势事件时，是否禁止屏幕滚动以及下拉刷新
     * @desc 默认为 false
     */
    disableScroll: boolean;
    /**
     * @desc 是否启用高清处理
     * @desc 默认为 true
     */
    hidpi: boolean;
    /**
     * @desc 手指触摸动作开始时触发
     */
    onTouchstart: (event: TEvent) => void;
    /**
     * @desc 手指触摸后移动时触发
     */
    onTouchmove: (event: TEvent) => void;
    /**
     * @desc 手指触摸动作结束时触发
     */
    onTouchend: (event: TEvent) => void;
    /**
     * @desc 手指触摸动作被打断时触发
     */
    onTouchcancel: (event: TEvent) => void;
    /**
     * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
     */
    onLongtap: (event: TEvent) => void;
    /**
     * @desc 发生错误时触发
     */
    onError: (event: TCanvasErrorEvent) => void;
  },
  {}
>;

/**
 * @desc web-view message 事件对象
 */
type TWebViewMessageEvent = TEvent & {
  detail: {
    data: any[];
  };
};
/**
 * @desc web 浏览器组件，可承载网页
 */
type TWebView = TComponent<
  {
    /**
     * @desc webview 指向网页的链接
     */
    src: string | string;
    /**
     * @desc 用于为 iframe 指定其特征策略
     */
    allow: string;
    /**
     * @desc 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件
     */
    sandbox: string;
    /**
     * @desc webview 的样式
     */
    webviewStyles: {
      progress:
        | {
            color: string;
          }
        | boolean;
    };
    /**
     * @desc 是否自动更新当前页面标题
     */
    updateTitle: boolean;
    /**
     * @desc 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息
     */
    onMessage: (event: TWebViewMessageEvent) => void;
    /**
     * @desc 网页向应用实时 postMessage
     */
    onPostMessage: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc ad error 事件对象
 */
type TAdErrorEvent = TEvent & {
  detail: {
    errCode: number;
  };
};
/**
 * @desc 广告
 */
type TAd = TComponent<
  {
    /**
     * @desc APP 广告位 id */
    adpid: string;
    /**
     * @desc 广告单元 id，可在小程序管理后台的流量主模块新建
     */
    unitId: string;
    /**
     * @desc 广告自动刷新的间隔时间，必须大于等于 30
     * @desc 该参数不传入时 Banner 广告不会自动刷新
     * @desc 单位为 s
     */
    adIntervals: number;
    /**
     * @desc 广告数据，优先级高于 adpid
     */
    data: Record<string, any>;
    /**
     * @desc 小程序应用 ID
     */
    appid: string;
    /**
     * @desc 小程序广告位 ID
     */
    apid: string;
    /**
     * @desc type 为 feeds 时广告左边距，必须大于 0
     * @desc 单位为 px
     */
    adLeft: number;
    /**
     * @desc type 为 feeds 时广告上边距，必须大于 0
     * @desc 单位为 px
     */
    adTop: number;
    /**
     * @desc type 为 feeds 时广告宽度，最大值为屏幕宽度，最小值为 265
     * @desc 单位为 px
     * @desc 默认为 100%
     */
    adWidth: number;
    /**
     * @desc type 为 feeds 时广告高度，最大值为 160，最小值为 85
     * @desc 单位为 px
     */
    adHeight: number;
    /**
     * @desc 广告类型
     */
    type:
      | "banner"
      | "card"
      | "feeds"
      | "block"
      | "feed"
      | "video"
      | "large"
      | "llmg"
      | "rlmg"
      | "swip"
      | "grid";
    /**
     * @desc 广告加载成功的回调
     */
    onLoad: (event: TEvent) => void;
    /**
     * @desc 广告加载失败的回调
     */
    onError: (event: TAdErrorEvent) => void;
    /**
     * @desc 广告关闭的回调
     */
    onClose: (event: TEvent) => void;
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

/**
 * @desc 数据库查询组件，对 uni-clientdb 的 js 库的再封装
 */
type TUnicloudDb = TComponent<
  {
    /**
     * @desc 服务空间信息
     */
    spaceInfo: {
      provider: string;
      spaceId: string;
      clientSecret: string;
      endpoint: string;
    };
    /**
     * @desc 表名
     */
    collection: string;
    /**
     * @desc 指定要查询的字段，多个字段用 , 分割
     */
    field: string;
    /**
     * @desc 查询条件，过滤记录 */
    where: string;
    /**
     * @desc 排序字段及正序倒序设置
     */
    orderby: string;
    /**
     * @desc 手动指定使用的关联关系
     */
    foreignKey: string;
    /**
     * @desc 分页策略
     * @desc 默认为 add
     */
    pageData: "add" | "replace";
    /**
     * @desc 当前页
     */
    pageCurrent: number;
    /**
     * @desc 每页数据数量
     */
    pageSize: number;
    /**
     * @desc 是否查询总数据条数
     * @desc 默认 false
     */
    getcount: boolean;
    /**
     * @desc 指定查询结果是否仅返回数组第一条数据
     * @desc false：结果数据外会再用数组包裹一层，一般用于列表页
     * @desc true：直接返回结果数据，一般用于非列表页
     * @desc 默认 false
     */
    getone: boolean;
    /**
     * @desc 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
     * @desc 场景：前端无权操作的数据，比如阅读数 +1
     */
    action: string;
    /**
     * @desc 是否查询树状结构数据
     */
    gettree: boolean;
    /**
     * @desc gettree 的第一层级条件
     * @desc 此初始条件可以省略，不传 startWith 时默认从最顶级开始查询
     */
    startwith: string;
    /**
     * @desce gettree查询返回的树的最大层级，超过设定层级的节点不会返回
     * @desc 取值范围为 1 - 15
     * @dsec 默认为 10*/
    limitlevel: number;
    /**
     * @desc 对数据进行分组
     */
    groupby: string;
    /**
     * @desc 对数据进行分组统计
     */
    groupField: string;
    /**
     * @desc 是否对数据查询结果中重复的记录进行去重
     * @desc 默认为 false
     */
    distinct: boolean;
    /**
     * @desc 加载数据时机
     * @desc 默认为 auto
     */
    loadtime: "auto" | "onready" | "manual";
    /**
     * @desc 发行 H5 ssr 时有效，用于保证服务器端渲染和前端加载的数据对应
     * @desc 页面同时出现 2 个及以上 unicloud-db 组件需要配置此属性，且要保证值整个应用唯一
     * @desc 默认根据页面路径 + unicloud-db 组件代码中的行号生成唯一值
     */
    ssrKey: string;
    /**
     * @desc 成功回调
     * @desc 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
     */
    onLoad: (
      data: any,
      ended: boolean,
      pagination: { size: number; count: number }
    ) => void;
    /**
     * @desc 失败回调
     */
    onError: (event: TEvent) => void;
  },
  {}
>;

/**
 * @desc page-meta resize 事件对象
 */
type TPageMetaResizeEvent = TEvent & {
  detail: {
    size: {
      windowWidth: number;
      windowHeight: number;
    };
  };
};
/**
 * @desc page-meta scroll 事件对象
 */
type TPageMetaScrollEvent = TEvent & {
  detail: {
    scrollTop: number;
  };
};
/**
 * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
 * @desc 可部分替代 pages.json
 * @desc 只能是页面内的第一个节点
 */
type TPageMeta = TComponent<
  {
    /**
     * @desc 下拉背景字体、loading 图的样式
     */
    backgroundTextStyle: "dark" | "light";
    /**
     * @desc 窗口的背景色
     */
    backgroundColor: string;
    /**
     * @desc 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorTop: string;
    /**
     * @desc 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorBottom: string;
    /**
     * @desc 滚动位置，在被设置时页面会滚动到对应位置
     * @desc 单位为 px / rpx
     */
    scrollTop: string;
    /**
     * @desc 滚动动画时长
     * @desc 默认为 300
     */
    scrollDuration: number;
    /**
     * @desc 页面根节点样式
     * @desc 页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点
     */
    pageStyle: string;
    /**
     * @desc 页面的根字体大小
     */
    rootFontSize: string;
    /**
     * @desc 是否开启自动下拉刷新
     * @desc 默认为 false
     */
    enablePullDownRefresh: boolean;
    /**
     * @desc 页面尺寸变化时触发
     */
    onResize: (event: TPageMetaResizeEvent) => void;
    /**
     * @desc 页面滚动时触发
     */
    onScroll: (event: TPageMetaScrollEvent) => void;
    /**
     * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
     */
    onScrolldone: (event: TEvent) => void;
  },
  {}
>;
/** 用于展示微信开放的数据 */
type TOpenData = TComponent<
  {
    /**
     * @desc 开放数据类型
     */
    type:
      | "userNickName"
      | "userAvatarUrl"
      | "userGender"
      | "groupName"
      | "userCity"
      | "userProvince"
      | "userCountry"
      | "userLanguage";
    /**
     * @desc 群 ID
     * @desc type="groupName" 时有效
     */
    openGid: string;
    /**
     * @desc 以什么预压展示 userInfo
     * @desc type="user*" 时有效
     */
    lang: "en" | "zh_CN" | "zh_TW";
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
