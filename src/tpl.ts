export const baseTpl = `import type {
  DefineComponent, ComputedOptions,
  MethodOptions, ComponentOptionsMixin,
  VNodeProps, AllowedComponentProps, ComponentCustomProps,
  ExtractPropTypes, EmitsOptions
} from 'vue3'
type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

type TComponent<P extends Record<string, any>, E extends EmitsOptions> = DefineComponent<{}, {}, {}, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, E, string, PublicProps, Readonly<ExtractPropTypes<P>>>

`;
