import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { IntegrationList } from "./integration/IntegrationList";
import { IntegrationCreate } from "./integration/IntegrationCreate";
import { IntegrationEdit } from "./integration/IntegrationEdit";
import { IntegrationShow } from "./integration/IntegrationShow";
import { ContractQueryList } from "./contractQuery/ContractQueryList";
import { ContractQueryCreate } from "./contractQuery/ContractQueryCreate";
import { ContractQueryEdit } from "./contractQuery/ContractQueryEdit";
import { ContractQueryShow } from "./contractQuery/ContractQueryShow";
import { ContractReminderList } from "./contractReminder/ContractReminderList";
import { ContractReminderCreate } from "./contractReminder/ContractReminderCreate";
import { ContractReminderEdit } from "./contractReminder/ContractReminderEdit";
import { ContractReminderShow } from "./contractReminder/ContractReminderShow";
import { ContractReportList } from "./contractReport/ContractReportList";
import { ContractReportCreate } from "./contractReport/ContractReportCreate";
import { ContractReportEdit } from "./contractReport/ContractReportEdit";
import { ContractReportShow } from "./contractReport/ContractReportShow";
import { ContractVersionList } from "./contractVersion/ContractVersionList";
import { ContractVersionCreate } from "./contractVersion/ContractVersionCreate";
import { ContractVersionEdit } from "./contractVersion/ContractVersionEdit";
import { ContractVersionShow } from "./contractVersion/ContractVersionShow";
import { ContractTemplateList } from "./contractTemplate/ContractTemplateList";
import { ContractTemplateCreate } from "./contractTemplate/ContractTemplateCreate";
import { ContractTemplateEdit } from "./contractTemplate/ContractTemplateEdit";
import { ContractTemplateShow } from "./contractTemplate/ContractTemplateShow";
import { ContractPerformanceList } from "./contractPerformance/ContractPerformanceList";
import { ContractPerformanceCreate } from "./contractPerformance/ContractPerformanceCreate";
import { ContractPerformanceEdit } from "./contractPerformance/ContractPerformanceEdit";
import { ContractPerformanceShow } from "./contractPerformance/ContractPerformanceShow";
import { ContractApprovalList } from "./contractApproval/ContractApprovalList";
import { ContractApprovalCreate } from "./contractApproval/ContractApprovalCreate";
import { ContractApprovalEdit } from "./contractApproval/ContractApprovalEdit";
import { ContractApprovalShow } from "./contractApproval/ContractApprovalShow";
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
        title={"Contract Management System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Integration"
          list={IntegrationList}
          edit={IntegrationEdit}
          create={IntegrationCreate}
          show={IntegrationShow}
        />
        <Resource
          name="ContractQuery"
          list={ContractQueryList}
          edit={ContractQueryEdit}
          create={ContractQueryCreate}
          show={ContractQueryShow}
        />
        <Resource
          name="ContractReminder"
          list={ContractReminderList}
          edit={ContractReminderEdit}
          create={ContractReminderCreate}
          show={ContractReminderShow}
        />
        <Resource
          name="ContractReport"
          list={ContractReportList}
          edit={ContractReportEdit}
          create={ContractReportCreate}
          show={ContractReportShow}
        />
        <Resource
          name="ContractVersion"
          list={ContractVersionList}
          edit={ContractVersionEdit}
          create={ContractVersionCreate}
          show={ContractVersionShow}
        />
        <Resource
          name="ContractTemplate"
          list={ContractTemplateList}
          edit={ContractTemplateEdit}
          create={ContractTemplateCreate}
          show={ContractTemplateShow}
        />
        <Resource
          name="ContractPerformance"
          list={ContractPerformanceList}
          edit={ContractPerformanceEdit}
          create={ContractPerformanceCreate}
          show={ContractPerformanceShow}
        />
        <Resource
          name="ContractApproval"
          list={ContractApprovalList}
          edit={ContractApprovalEdit}
          create={ContractApprovalCreate}
          show={ContractApprovalShow}
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
