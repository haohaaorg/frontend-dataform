import React from "react";
import classnames from "classnames";
import "./tag.less";
import Button from "../Button";
import { CloseIcon } from '../Icons';

const Tag = (props: any) => {
  const { name, withRemove, removeAction } = props;
  return (
    <div className={classnames("tag", withRemove && "tagWithRemove")}>
      {name}
      {withRemove && (
        <Button onClick={removeAction} className={"removeButton"}>
           <CloseIcon width={8}/>
        </Button>
      )}
    </div>
  );
};

Tag.defaultProps = {
  name: "",
  withRemove: false,
  removeAction: () => {},
};

export default Tag;
