
import styled from 'styled-components';

export const HeightSetter = styled.div`
  height: ${props => props.height}px;
  z-index: 99999;
`;

export const VideoElement = styled.video`
/*position: sticky;
  top: 0;
  left: 0;*/
  width: 100%;
`;

export const StickyHolder = styled.div`
position: sticky;
  top: 0;
  left: 0;
`
