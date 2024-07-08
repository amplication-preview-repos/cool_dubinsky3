import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AgentAssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AgentPhoneNumber" source="agentPhoneNumber" />
        <TextInput label="AgentName" source="agentName" />
        <TextInput label="AgentEmail" source="agentEmail" type="email" />
      </SimpleForm>
    </Edit>
  );
};
