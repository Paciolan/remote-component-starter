import styled from "styled-components";
import { prop } from "../lib/prop";

export const Title = styled.h1(props =>
  prop(["theme", "typography", "title"], props)
);
