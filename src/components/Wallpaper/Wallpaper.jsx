import styled from "styled-components";
import img from "../../images/initialWallpaper.png";

export const Wallpaper = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
`