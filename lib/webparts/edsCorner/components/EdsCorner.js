var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './EdsCorner.module.scss';
var EdsCorner = /** @class */ (function (_super) {
    __extends(EdsCorner, _super);
    function EdsCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdsCorner.prototype.render = function () {
        return (React.createElement("div", { className: styles.edsCorner },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", null,
                        React.createElement("img", { className: styles.imgStyle, src: "https://wintrusttest.sharepoint.com/sites/SPModPOC/Site%20Assets/edsCorner.png" })),
                    React.createElement("div", null,
                        React.createElement("p", null, "Have any questions? E-mail Ed at AskEd@Wintrust.com")),
                    React.createElement("div", null,
                        React.createElement("audio", { className: styles.audio, controls: true, controlsList: "nodownload" },
                            React.createElement("source", { src: "https://wintrusttest.sharepoint.com/sites/SPModPOC/Site%20Assets/Eds Message_Feb_2021.mp4", type: "audio/mp4" }))),
                    React.createElement("div", { className: styles.btnajacent },
                        React.createElement("div", { className: styles.ajacent },
                            React.createElement("button", { className: styles.btnEdsMessage }, "View all Ed's Messages")),
                        React.createElement("div", { className: styles.ajacent },
                            React.createElement("button", { className: styles.btnEdsMessage }, "View all Ed's Audio"))),
                    React.createElement("div", { className: styles.column })))));
    };
    return EdsCorner;
}(React.Component));
export default EdsCorner;
//# sourceMappingURL=EdsCorner.js.map