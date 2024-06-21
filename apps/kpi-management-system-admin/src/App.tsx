import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KpiClassificationList } from "./kpiClassification/KpiClassificationList";
import { KpiClassificationCreate } from "./kpiClassification/KpiClassificationCreate";
import { KpiClassificationEdit } from "./kpiClassification/KpiClassificationEdit";
import { KpiClassificationShow } from "./kpiClassification/KpiClassificationShow";
import { KpiList } from "./kpi/KpiList";
import { KpiCreate } from "./kpi/KpiCreate";
import { KpiEdit } from "./kpi/KpiEdit";
import { KpiShow } from "./kpi/KpiShow";
import { RankList } from "./rank/RankList";
import { RankCreate } from "./rank/RankCreate";
import { RankEdit } from "./rank/RankEdit";
import { RankShow } from "./rank/RankShow";
import { PerformanceAppraisalList } from "./performanceAppraisal/PerformanceAppraisalList";
import { PerformanceAppraisalCreate } from "./performanceAppraisal/PerformanceAppraisalCreate";
import { PerformanceAppraisalEdit } from "./performanceAppraisal/PerformanceAppraisalEdit";
import { PerformanceAppraisalShow } from "./performanceAppraisal/PerformanceAppraisalShow";
import { RankAdjustmentList } from "./rankAdjustment/RankAdjustmentList";
import { RankAdjustmentCreate } from "./rankAdjustment/RankAdjustmentCreate";
import { RankAdjustmentEdit } from "./rankAdjustment/RankAdjustmentEdit";
import { RankAdjustmentShow } from "./rankAdjustment/RankAdjustmentShow";
import { QueryList } from "./query/QueryList";
import { QueryCreate } from "./query/QueryCreate";
import { QueryEdit } from "./query/QueryEdit";
import { QueryShow } from "./query/QueryShow";
import { RankPromotionList } from "./rankPromotion/RankPromotionList";
import { RankPromotionCreate } from "./rankPromotion/RankPromotionCreate";
import { RankPromotionEdit } from "./rankPromotion/RankPromotionEdit";
import { RankPromotionShow } from "./rankPromotion/RankPromotionShow";
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
        title={"KPI Management System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="KpiClassification"
          list={KpiClassificationList}
          edit={KpiClassificationEdit}
          create={KpiClassificationCreate}
          show={KpiClassificationShow}
        />
        <Resource
          name="Kpi"
          list={KpiList}
          edit={KpiEdit}
          create={KpiCreate}
          show={KpiShow}
        />
        <Resource
          name="Rank"
          list={RankList}
          edit={RankEdit}
          create={RankCreate}
          show={RankShow}
        />
        <Resource
          name="PerformanceAppraisal"
          list={PerformanceAppraisalList}
          edit={PerformanceAppraisalEdit}
          create={PerformanceAppraisalCreate}
          show={PerformanceAppraisalShow}
        />
        <Resource
          name="RankAdjustment"
          list={RankAdjustmentList}
          edit={RankAdjustmentEdit}
          create={RankAdjustmentCreate}
          show={RankAdjustmentShow}
        />
        <Resource
          name="Query"
          list={QueryList}
          edit={QueryEdit}
          create={QueryCreate}
          show={QueryShow}
        />
        <Resource
          name="RankPromotion"
          list={RankPromotionList}
          edit={RankPromotionEdit}
          create={RankPromotionCreate}
          show={RankPromotionShow}
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
