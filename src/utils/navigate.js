export default class RootNavigator {
    static navigate = null;

    static setNavigate(navigate) {
        this.navigate = navigate;
    }

    static getNavigate() {
        return this.navigate;
    }
}
