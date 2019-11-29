import CandleInterface     from 'tradeEngine/Interface/CandleInterface';
import IndicatorsInterface from 'tradeEngine/Interface/IndicatorsInterface';
import MiscInterface       from 'tradeEngine/Interface/MiscInterface';

// prettier-ignore
export default Interface => class extends IndicatorsInterface(
    MiscInterface(CandleInterface(Interface))) {
    getToolsInterface() {
        return {
            getTime: () => parseInt(new Date().getTime() / 1000),
            ...this.getCandleInterface(),
            ...this.getMiscInterface(),
            ...this.getIndicatorsInterface(),
        };
    }
};
