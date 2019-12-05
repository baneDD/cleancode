import { TagCloud } from 'react-tagcloud';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Meta from '../Post/Meta';
import {
  GREEN,
  SANS,
  VERY_SMALL_SCREEN,
  MOBILE_DEVICE,
} from '../../global/Theme';

export const StyledTagCloud = styled(TagCloud)`
  min-width: 100%;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 40px;

  .simple-cloud .tag-cloud-tag {
    cursor: pointer;
  }
`;

export const ListOfPosts = styled.ul`
  margin-top: 20px;
`;

export const StyledMeta = styled(Meta)`
  margin: 0;
`;

export const PostDescriptionWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 10px;
`;

export const PostDescription = styled.p`
  margin: 10px 0 0;
  font-family: ${SANS};
  font-size: 16px;
  color: white;
`;

export const PostLink = styled(Link)`
  color: ${GREEN};
  font-size: 22px;
  border-bottom: none;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const ResponsiveWrapper = styled.li`
  position: relative;
  margin-bottom: 20px;

  img {
    border-radius: 10px;
    width: 100%;
  }

  @media ${VERY_SMALL_SCREEN}, ${MOBILE_DEVICE} {
    ${PostLink} {
      font-size: 16px;
    }

    ${StyledMeta} {
      font-size: 12px;
    }

    ${PostDescription} {
      font-size: 12px;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      position: relative;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 !important;
      -webkit-line-clamp: 2;
      height: calc(1em * 1.2 * 2);
    }

    ${StyledTagCloud} {
      margin-top: 10px;
    }
  }
`;
