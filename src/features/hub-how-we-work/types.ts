export type FeatureCardVariant = "dark" | "medium" | "light";

export interface IFeatureCard {
  title: string;
  variant: FeatureCardVariant;
  icon: string;
  bgImage: string;
}
