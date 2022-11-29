import React from 'react';

import { DefaultEditor } from 'react-simple-wysiwyg';

interface IProps {
  data: string;
  setData: (e: string) => void;
}

const TextEditor = (props: IProps) => {
  const onChange = (e: any) => {
    props.setData(e?.target?.value);
  };

  return <DefaultEditor value={props.data} onChange={onChange} />;
};

export default TextEditor;