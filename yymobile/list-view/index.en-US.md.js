webpackJsonp([153,298],{704:function(e,t){e.exports={content:["section",["p","It is suitable for displaying the long list data type of the same kind, and has certain optimization effect on the rendering performance.\n",["code","ListView"]," is often used with ",["a",{title:null,href:"https://mobile.ant.design/components/refresh-control/"},"RefreshControl"],"."]],meta:{category:"Components",type:"Combination",title:"ListView",filename:"yymobile/list-view/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["ul",["li",["p","React-Native version use ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/listview.html#content"},"React Native ListView"]," directly."]],["li",["p","WEB version use ",["a",{title:null,href:"http://facebook.github.io/react-native/releases/0.26/docs/listview.html"},"React Native ListView(v0.26)"],"'s  API, but there are some differences that are listed below"]]],["h4","The APIs of React-Native-ListView that are not supported on the web platform:"],["blockquote",["p",'In general, the "platform-specific" API is not supported, e.g. ',["code","android"],"endFillColor\u3001",["code","iOS"],"alwaysBounceHorizontal."]],["ul",["li",["p","onChangeVisibleRows"]],["li",["p","stickyHeaderIndices"]],["li",["p","the APIs of ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/scrollview.html#props"},"ScrollView"]," that are not supported:"],["ul",["li",["p","keyboardDismissMode"]],["li",["p","keyboardShouldPersistTaps"]],["li",["p","onContentSizeChange (can use ",["code","onLayout"]," instead)"]],["li",["p","removeClippedSubviews"]],["li",["p","scrollEnabled"]],["li",["p","showsHorizontalScrollIndicator (can use ",["code","css style"]," instead)"]],["li",["p","showsVerticalScrollIndicator (can use ",["code","css style"]," instead)"]]]],["li",["p","the APIs of ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/view.html#props"},"View"],": only do not fully support ",["code","onLayout"]]]],["h4","Added APIs on the WEB platform"],["ul",["li",["p","useBodyScroll (boolean, false) - use html ",["code","body"]," as a scroll container."]],["li",["p","stickyHeader (boolean, false) - sticky block header to the top of the page (Note: will automatically use html ",["code","body"]," as a scroll container)."],["ul",["li",["p","After enabling it, you can also set ",["code","stickyProps / stickyContainerProps"]," (see ",["a",{title:null,href:"https://github.com/captivationsoftware/react-sticky"},"react-sticky"]," for details)"]]]],["li",["p","renderBodyComponent (function, () => React.Element) - custom body package component."]],["li",["p","renderSectionBodyWrapper (function, (sectionID: any) => React.Element) - render a custom block wrapper component."]],["li",["p","useZscroller (boolean, false) - use ",["a",{title:null,href:"https://github.com/yiminghe/zscroller"},"zscroller"]," to simulate the implementation of rolling containers (can be used for some poor Android machine)"],["ul",["li",["p","Note: After enabling, the ",["code","useBodyScroll"]," and",["code","stickyHeader"]," settings are automatically ignored."]]]],["li",["p","scrollerOptions - see ",["a",{title:null,href:"https://github.com/yiminghe/zscroller#options"},"zscroller options"]," for details."]]],["h3","New ",["code","ListView.IndexedList"]," component on the WEB platform"],["p",'This component is often used in the "Contacts" / "city list" scenes, support for index navigation.'],["blockquote",["p","Note: Only two-step rendering is supported, so that the first screen priority display can be achieved, but if the list data volume is too large, the overall performance will still be affected."]],["ul",["li",["p","quickSearchBarTop (object{value:string, label:string}, value/label default is '#') - top button of navigation bar."]],["li",["p","quickSearchBarStyle (object) - quickSearchBar's style."]],["li",["p","onQuickSearch (function, (sectionID: any, topId?:any) => void) - fire on clicking navigation bar."]],["li",["p","delayTime (number) - default 100ms, delay rendering time setting (for the first screen optimization, the initial rendering of the number of ",["code","initialListSize"]," data, after which time rendering the remaining data items, ie ",["code","totalRowCount - initialListSize"],")."]],["li",["p","delayActivityIndicator (react node) - the loading indicator for delayed rendering."]]]]}}});