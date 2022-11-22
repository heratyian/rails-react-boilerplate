import RootState from '../../redux-modules/definitions/RootState';

interface PageProps<P = {}> extends RootState {}
interface PageProps<P = {}> {
  dispatch: Dispatch<S>;
}

export default PageProps;
