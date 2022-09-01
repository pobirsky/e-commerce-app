import Loader from "@uikit/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  children: any;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ children, loading }) => {
  return <>{loading ? <Loader /> : <div>{children}</div>}</>;
};

export default WithLoader;
