import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
};


const SvgIconExampleSimple = () => (
    <div>
        <HomeIcon style={iconStyles} />
        <HomeIcon style={iconStyles} color={blue500} />
        <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
    </div>
);

export default SvgIconExampleSimple;


export const NewsIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

export const ProductHuntIcon = (props) => (
    <SvgIcon
        viewBox="0 0 256 256"
        width={props.width}
        height={props.height}
        style={props.style}
    >
        {props.title && <title>{props.title}</title>}
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stopColor="#DA552F" offset="0%"></stop>
                <stop stopColor="#D04B25" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <path d="M128,256 C198.6944,256 256,198.6944 256,128 C256,57.3056 198.6944,0 128,0 C57.3056,0 0,57.3056 0,128 C0,198.6944 57.3056,256 128,256 L128,256 Z" fill="url(#linearGradient-1)"></path>
                <path d="M96,76.8 L96,179.2 L115.2,179.2 L115.2,147.2 L144.256,147.2 C163.552,146.688 179.2,131.04 179.2,112 C179.2,92.448 163.552,76.8 144.256,76.8 L96,76.8 L96,76.8 Z M144.4928,128 L115.2,128 L115.2,96 L144.4928,96 C153.056,96 160,103.168 160,112 C160,120.832 153.056,128 144.4928,128 L144.4928,128 Z" fill="#FFFFFF"></path>
            </g>
        </g>
    </SvgIcon>


);
