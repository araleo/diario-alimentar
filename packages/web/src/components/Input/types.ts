import { Control, RegisterOptions } from 'react-hook-form';

// I'm declaring a new ControllerProps type here instead of
// using the UseControllerProps from react-hook-form because
// the default one was causing typing conflicts with the types
// from the forms, hence the any types below.
export type AppControllerProps = {
  name: string;
  // eslint-disable-next-line
  control: Control<any, object>;
  // eslint-disable-next-line
  defaultValue?: any;
  rules?: RegisterOptions;
};
