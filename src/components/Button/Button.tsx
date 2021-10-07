
import React from 'react';
import classnames from 'classnames';
import styles  from './button.less';

const Button = (props: any) => {
      const {
        type,
        fullWidth,
        noUppercase,
        className,
        style,
        onClick,
        alwaysActive,
      } = props;
      return(
        <button
        onClick={onClick}
        className={classnames(
          styles.button,
          styles.buttonDefaults,
          styles[type],
          fullWidth && styles.fullWidth,
          noUppercase && styles.noUppercase,
          alwaysActive && styles.alwaysActive,
          className
        )}
        style={style}
      >
        {props.children}
      </button>
      )
    }
    
    Button.defaultProps = {
          type: 'default',
          fullWidth: false,
          noUppercase: false,
          alwaysActive: false,
          className: '',
          style: {},
          onClick: () => { },
        };
        
export default Button;
    