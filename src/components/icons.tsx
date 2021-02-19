import React, { FunctionComponent } from "react";

interface IconProps {
  className?: string;
}

export const MainLogoIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className={props.className}>
      <linearGradient id="a" x1="6.146" x2="35.593" y1="13.75" y2="13.75" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset="1" stopColor="#2ddaff"/>
      </linearGradient>
      <path fill="url(#a)" d="M30 25.1V30l-10 5-5-2.5v-15l5 2.6V30l10-4.9z"/>
      <linearGradient id="b" x1="36.858" x2="2.07" y1="6.869" y2="15.751" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset="1" stopColor="#2ddaff"/>
      </linearGradient>
      <path fill="url(#b)" d="M30 30v5l-10 5-10-5V15.1l5 2.4v15l5 2.5 10-5z"/>
      <linearGradient id="c" x1="17.115" x2="29.595" y1="8.043" y2="14.007" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset="1" stopColor="#2ddaff"/>
      </linearGradient>
      <path fill="url(#c)" d="M20 30l10-3.5v-1.4L20 30z"/>
      <linearGradient id="d" x1="23.41" x2="32.129" y1="37.523" y2="14.272" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset=".59" stopColor="#9d15f8"/>
        <stop offset="1" stopColor="#ff4cf9"/>
      </linearGradient>
      <path fill="url(#d)" d="M40 10.1v10l-10 5L20 30v-4.9l.1-.1L35 17.6v-5l-10-5 .2-.2L30 5l10 5.1z"/>
      <linearGradient id="e" x1="31.3" x2="21.047" y1="13.151" y2="34.736" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset=".59" stopColor="#9d15f8"/>
        <stop offset="1" stopColor="#ff4cf9"/>
      </linearGradient>
      <path fill="url(#e)" d="M35 12.6v5l-15 7.5v-5l5-2.5 5-2.5-10-5 5-2.5 10 5z"/>
      <linearGradient id="f" x1="31.889" x2="41.965" y1="15.421" y2="7.91" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0049e7"/>
        <stop offset=".59" stopColor="#9d15f8"/>
        <stop offset="1" stopColor="#ff4cf9"/>
      </linearGradient>
      <path fill="url(#f)" d="M40 24.3v5.6l-5.7 2.8v-5.6l5.7-2.8z"/>
      <g>
        <linearGradient id="g" x1="21.189" x2="6.866" y1="34.644" y2="12.093" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff057e"/>
          <stop offset="1" stopColor="#fc0"/>
        </linearGradient>
        <path fill="url(#g)" d="M25 17.6l-5 2.5-5-2.6-5-2.4v10l-5-2.5v-10l5-2.5 10 5 5 2.5z"/>
        <linearGradient id="h" x1="-3.517" x2="25.191" y1="11.5" y2="36.151" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff057e"/>
          <stop offset="1" stopColor="#fc0"/>
        </linearGradient>
        <path fill="url(#h)" d="M30 15.1l-5 2.5-5-2.5-10-5-5 2.5v10l-.2-.1L0 20.1v-10L10 5l10 5.1 10 5z"/>
        <g>
          <linearGradient id="i" x1="20" x2="20" y1="32.633" y2="41.273" gradientTransform="matrix(1 0 0 -1 0 40)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ff057e"/>
            <stop offset="1" stopColor="#fc0"/>
          </linearGradient>
          <path fill="url(#i)" d="M20 5.9L14 3l6-3 6 3-6 2.9z"/>
        </g>
      </g>
      <linearGradient id="j" x1="3.93" x2="14.006" y1="15.421" y2="7.91" gradientTransform="rotate(180 6.02 20)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0541c5"/>
        <stop offset=".59" stopColor="#199bf5"/>
        <stop offset="1" stopColor="#88f4fe"/>
      </linearGradient>
      <path fill="url(#j)" d="M5.7 27.1v5.6L0 29.9v-5.6l5.7 2.8z"/>
    </svg>
  );
};


export const ExternalLinkIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
};

export const DayIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
};

export const NightIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
};

export const TwitterIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  );
};

export const GitHubIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 256 250" stroke="currentColor" className={props.className}>
      <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
    </svg>
  );
};

export const TimeIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};
