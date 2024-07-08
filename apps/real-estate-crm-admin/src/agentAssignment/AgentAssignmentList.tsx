import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AgentAssignmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AgentAssignments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="AgentPhoneNumber" source="agentPhoneNumber" />
        <TextField label="AgentName" source="agentName" />
        <TextField label="AgentEmail" source="agentEmail" />
      </Datagrid>
    </List>
  );
};