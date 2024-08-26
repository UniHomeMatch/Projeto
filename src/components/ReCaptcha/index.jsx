import React, { useCallback, useEffect, useState } from "react";

const ReCaptchaV3 = ({ sitekey }) => {
    const [recaptchaReady, setRecaptchaReady] = useState(false);

    useEffect(() => {
        if (window.grecaptcha) {
            setRecaptchaReady(true);
        } else {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = () => setRecaptchaReady(true);
        }
    }, [sitekey]);

    const executeRecaptcha = useCallback(async (action) => {
        if (recaptchaReady && window.grecaptcha) {
            return await window.grecaptcha.execute(sitekey, { action });
        }
        return null;
    }, [recaptchaReady, sitekey]);

    return executeRecaptcha;
};

export default ReCaptchaV3;
    