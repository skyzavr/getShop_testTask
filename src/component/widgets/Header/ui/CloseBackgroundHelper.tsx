import { createPortal } from 'react-dom';

type CloseProps = {
  toggleMenu: () => void;
  isDocument: boolean;
  showMenu: boolean;
};

export const CloseBackground = (props: CloseProps) => {
  const { toggleMenu, isDocument, showMenu } = props;
  return isDocument && showMenu
    ? createPortal(
        <div
          style={{
            width: `100%`,
            height: '100%',
            position: 'fixed',
            top: ' 0',
            zIndex: '1',
          }}
          onClick={toggleMenu}
        />,
        document.body
      )
    : null;
};
