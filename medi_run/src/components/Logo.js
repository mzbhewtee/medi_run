import React from 'react';

class Logo extends React.Component {
    render() {
        const { textColor, iconColor, size } = this.props;
        const iconSize = size === 'text-sm' ? 'text-2xl' : 'text-3xl';

        return (
            <div className={`font-bold ${size} cursor-pointer flex items-center font-sans text-${textColor}`}>
                <span className={`${iconSize} text-${iconColor} mr-1 pt-2`}>
                    <ion-icon name="infinite-outline"></ion-icon>
                </span>
                Medi-Run
            </div>
        );
    }
}

export default Logo;
