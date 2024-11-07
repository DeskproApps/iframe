import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
global.React = React;
//for some reason the types are wrong, but this works
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.TextDecoder = TextDecoder;
