import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AgentAssignmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AgentPhoneNumber" source="agentPhoneNumber" />
        <TextInput label="AgentName" source="agentName" />
        <TextInput label="AgentEmail" source="agentEmail" type="email" />
      </SimpleForm>
    </Create>
  );
};
