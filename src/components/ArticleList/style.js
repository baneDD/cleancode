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
  max-width: 100%;
  min-width: 550px;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;

  .simple-cloud .tag-cloud-tag {
    cursor: pointer;
  }

  @media ${VERY_SMALL_SCREEN} {
    min-width: 280px;
  }
`;

export const ListOfPosts = styled.ul`
  margin-top: ${(props) => (props.hasTagCloud ? '40px' : '30px')};

  @media ${VERY_SMALL_SCREEN} {
    margin-top: 30px;
  }
`;

export const StyledMeta = styled(Meta)`
  margin: 0;
  font-size: 1em;
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
  color: white;
  font-size: 1.125em;
`;

export const PostLink = styled(Link)`
  border-bottom: none;
`;

export const PostTitle = styled.h3`
  margin-top: 0;
  color: ${GREEN};
`;

export const ResponsiveWrapper = styled.li`
  position: relative;
  margin-bottom: 40px;

  img {
    border-radius: 10px;
    width: 100%;
  }

  @media ${VERY_SMALL_SCREEN}, ${MOBILE_DEVICE} {
    ${PostTitle} {
      font-size: 1.2em;
    }

    ${StyledMeta} {
      font-size: 0.875em;
    }

    ${PostDescription} {
      font-size: 1em;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      position: relative;
      line-height: 1.3em;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 !important;
      -webkit-line-clamp: 2;
      height: calc(1em * 1.2 * 2);
    }
  }

  @media ${VERY_SMALL_SCREEN} {
    margin-bottom: 30px;
  }
`;
