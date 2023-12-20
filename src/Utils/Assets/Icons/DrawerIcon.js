import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

const DrawerIcon = props => (
    <Svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 85.57"
        {...props}
       >
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth={24}
            d="M15 20h70M15 50h70M15 80h70"
        />
    </Svg>
);

export default DrawerIcon;
