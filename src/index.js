import React from "react"
import ReactDOM from "react-dom"
import {
	AdaptivityProvider,
	ConfigProvider,
	useAdaptivity,
	AppRoot,
	SplitLayout,
	SplitCol,
	ViewWidth,
	View,
	Panel,
	PanelHeader,
	Header,
	Group,
	SimpleCell,
	Epic,
	Tabbar,
	TabbarItem
} from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"
import { Icon28Profile } from '@vkontakte/icons';
import { Icon28KeyboardBotsOutline } from '@vkontakte/icons';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';

const App = () => {
	const { viewWidth } = useAdaptivity()
	
	return (
		<AppRoot>
			<SplitLayout header={<PanelHeader separator={false} />}>
				<SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
						<View activePanel="main">
						<Panel id="main">
						<PanelHeader>Список ботов</PanelHeader>
						<Group>
							<Epic
							  <Tabbar>
							    <TabbarItem
							      label="12"
							      text="Профиль"
							    ><Icon28Profile /></TabbarItem>
							    <TabbarItem
							      label="12"
							      text="Боты"
							    ><Icon28KeyboardBotsOutline/></TabbarItem>
							    <TabbarItem
							      label="12"
							      text="События"
							    ><Icon28NewsfeedOutline /></TabbarItem>
							  </Tabbar>
							}>
						</Group>

						
						</Panel>
					</View>
				</SplitCol>
			</SplitLayout>
		</AppRoot>
	)
}

ReactDOM.render(
	<ConfigProvider>
		<AdaptivityProvider>
			<App />
		</AdaptivityProvider>
	</ConfigProvider>,
	document.getElementById("root")
)
