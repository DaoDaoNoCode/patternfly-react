import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerContext } from './Drawer';
import { formatBreakpointMods } from '../../helpers/util';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer. */
  className?: string;
  /** Content to be rendered in the drawer panel. */
  children?: React.ReactNode;
  /** Flag indicating that the drawer panel should not have a border. */
  hasNoBorder?: boolean;
  /** Width for drawer panel at various breakpoints */
  widths?: {
    default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  };
  /** Forward the ref outside the component */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerPanelContentWithRef: React.SFC<DrawerPanelContentProps> = ({
  className = '',
  children,
  hasNoBorder = false,
  widths,
  innerRef,
  ...props
}: DrawerPanelContentProps) => (
  <DrawerContext.Consumer>
    {({ isExpanded, isStatic, onExpand }) => {
      const hidden = isStatic ? false : !isExpanded;

      return (
        <div
          className={css(
            styles.drawerPanel,
            hasNoBorder && styles.modifiers.noBorder,
            formatBreakpointMods(widths, styles),
            className
          )}
          onTransitionEnd={ev => {
            if (!hidden && ev.nativeEvent.propertyName === 'transform') {
              onExpand();
            }
          }}
          ref={innerRef}
          hidden={hidden}
          {...props}
        >
          {!hidden && children}
        </div>
      );
    }}
  </DrawerContext.Consumer>
);
DrawerPanelContentWithRef.displayName = 'DrawerPanelContent';

export const DrawerPanelContent = React.forwardRef((props: DrawerPanelContentProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerPanelContentWithRef innerRef={ref} {...props}>
    {props.children}
  </DrawerPanelContentWithRef>
));
