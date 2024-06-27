import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OpenSourceProjectList } from "./openSourceProject/OpenSourceProjectList";
import { OpenSourceProjectCreate } from "./openSourceProject/OpenSourceProjectCreate";
import { OpenSourceProjectEdit } from "./openSourceProject/OpenSourceProjectEdit";
import { OpenSourceProjectShow } from "./openSourceProject/OpenSourceProjectShow";
import { GitHubLinkList } from "./gitHubLink/GitHubLinkList";
import { GitHubLinkCreate } from "./gitHubLink/GitHubLinkCreate";
import { GitHubLinkEdit } from "./gitHubLink/GitHubLinkEdit";
import { GitHubLinkShow } from "./gitHubLink/GitHubLinkShow";
import { BlogPostList } from "./blogPost/BlogPostList";
import { BlogPostCreate } from "./blogPost/BlogPostCreate";
import { BlogPostEdit } from "./blogPost/BlogPostEdit";
import { BlogPostShow } from "./blogPost/BlogPostShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TechnicianProfile"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OpenSourceProject"
          list={OpenSourceProjectList}
          edit={OpenSourceProjectEdit}
          create={OpenSourceProjectCreate}
          show={OpenSourceProjectShow}
        />
        <Resource
          name="GitHubLink"
          list={GitHubLinkList}
          edit={GitHubLinkEdit}
          create={GitHubLinkCreate}
          show={GitHubLinkShow}
        />
        <Resource
          name="BlogPost"
          list={BlogPostList}
          edit={BlogPostEdit}
          create={BlogPostCreate}
          show={BlogPostShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
