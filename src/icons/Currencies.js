// @flow

import React from 'react'

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    <path
      fill="currentColor"
      d="M8 5.581c-3.865 0-7-1.083-7-2.79C1 1.083 4.135 0 8 0s7 1.083 7 2.79c0 1.708-3.135 2.791-7 2.791zm-7-2.79c0-.309.241-.558.538-.558.298 0 .539.25.539.558v10.418c0 .28.516.704 1.517 1.05 1.142.396 2.714.625 4.406.625 1.692 0 3.264-.23 4.406-.625 1.001-.346 1.517-.77 1.517-1.05V2.791c0-.309.241-.558.539-.558.297 0 .538.25.538.558v10.418C15 14.921 11.88 16 8 16s-7-1.08-7-2.79V2.79zM13.923 8c0-.308.241-.558.539-.558.297 0 .538.25.538.558 0 1.711-3.12 2.79-7 2.79S1 9.712 1 8c0-.308.241-.558.538-.558.298 0 .539.25.539.558 0 .28.516.704 1.517 1.05 1.142.395 2.714.624 4.406.624 1.692 0 3.264-.229 4.406-.624 1.001-.346 1.517-.77 1.517-1.05zM8 4.465c1.682 0 3.254-.23 4.399-.625 1.004-.347 1.524-.772 1.524-1.05 0-.277-.52-.702-1.524-1.048-1.145-.396-2.717-.626-4.399-.626s-3.254.23-4.399.626c-1.004.346-1.524.771-1.524 1.049 0 .277.52.702 1.524 1.049 1.145.395 2.717.625 4.399.625z"
    />
  </svg>
)
