import ContractCardStore  from 'stores/contract-card-store';
import FlyoutStore        from 'stores/flyout-store';
import FlyoutHelpStore    from 'stores/flyout-help-store';
import GoogleDriveStore   from 'stores/google-drive-store';
import JournalStore       from 'stores/journal-store';
import RunPanelStore      from 'stores/run-panel-store';
import SaveLoadModalStore from 'stores/saveload-modal-store';
import ScratchStore       from 'stores/scratch-store';
import SummaryStore       from 'stores/summary-store';
import ToolbarStore       from 'stores/toolbar-store';
import TransactionsStore  from 'stores/transactions-store';
import QuickStrategyStore from 'stores/quick-strategy-store';

export default class RootStore {
    constructor(core, ws) {
        this.core  = core;
        this.ws    = ws;
        this.contract_card  = new ContractCardStore(this);
        this.flyout         = new FlyoutStore(this);
        this.flyout_help    = new FlyoutHelpStore(this);
        this.google_drive   = new GoogleDriveStore(this);
        this.journal        = new JournalStore(this);
        this.saveload       = new SaveLoadModalStore(this);
        this.summary        = new SummaryStore(this);
        this.transactions   = new TransactionsStore(this);
        this.toolbar        = new ToolbarStore(this);
        this.quick_strategy = new QuickStrategyStore(this);
        this.run_panel      = new RunPanelStore(this);

        // Create a singleton class to share root_store with scratch
        ScratchStore.setInstance(this);
    }
}
