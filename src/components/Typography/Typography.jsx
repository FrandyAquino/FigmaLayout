import React from 'react';
import PropTypes from 'prop-types';

const variantTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    lead: 'p',
    'body-lg': 'p',
    'body-lg-semibold': 'p',
    'body-md': 'p',
    'body-md-semibold': 'p',
    'body-sm': 'p',
    'body-sm-semibold': 'p',
    'body-xs-semibold': 'p',
    'body-xs-light': 'p',
};

const variantClasses = {
    h1: 'text-[46px] font-bold leading-[1.3]',
    h2: 'text-[36px] font-bold leading-[1.3]',
    h3: 'text-[28px] font-bold leading-[1.3]',
    h4: 'text-[24px] font-bold leading-[1.3]',
    h5: 'text-[20px] font-bold leading-[1.3]',
    h6: 'text-[16px] font-bold leading-[1.3]',
    lead: 'text-[22px] font-normal leading-[1.5]',
    'body-lg': 'text-[20px] font-normal leading-[1.7]',
    'body-lg-semibold': 'text-[20px] font-semibold leading-[1.7]',
    'body-md': 'text-[18px] font-normal leading-[1.7]',
    'body-md-semibold': 'text-[18px] font-semibold leading-[1.7]',
    'body-sm': 'text-[16px] font-normal leading-[1.7]',
    'body-sm-semibold': 'text-[16px] font-semibold leading-[1.7]',
    'body-xs-semibold': 'text-[14px] font-semibold leading-[1.7]',
    'body-xs-light': 'text-[14px] font-light leading-[1.7]',
};

const Typography = ({ variant = 'body-sm', color = 'text-black', align = 'text-left', children }) => {
    const Tag = variantTags[variant] || 'p'; 
    const currentClasses = variantClasses[variant] || variantClasses['body-sm'];

    return <Tag className={`${currentClasses} ${color} ${align}`}>{children}</Tag>;
};

Typography.propTypes = {
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'lead',
        'body-lg',
        'body-lg-semibold',
        'body-md',
        'body-md-semibold',
        'body-sm',
        'body-sm-semibold',
        'body-xs-semibold',
        'body-xs-light',
    ]),
    color: PropTypes.string,
    align: PropTypes.oneOf(['text-left', 'text-center', 'text-right']),
    children: PropTypes.node.isRequired,
};

export default Typography;
