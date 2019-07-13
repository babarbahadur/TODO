import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("add", 30),
        Icon.getImageSource("done", 30),
        Icon.getImageSource("delete", 30),
        Icon.getImageSource("menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "id.TodoScreen",
                    label: "Todo Screen",
                    title: "Todo Screen",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "id.DoneScreen",
                    label: "Todos Done",
                    title: "Todos Done",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "id.DeleteScreen",
                    label: "Delete Screen",
                    title: "Delete Screen",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                    
                }

            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "green"
            },

            drawer: {
                left: {
                    screen: "id.SideDrawer"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "green"
            },
        });
    });
};

export default startTabs;