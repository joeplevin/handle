const {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
  GetGroupCommand,
  CreateGroupCommand,
} = require('@aws-sdk/client-cognito-identity-provider');
const crypto = require('crypto');

const cognitoIdentityServiceProvider = new CognitoIdentityProviderClient({});
/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */

exports.handler = async event => {
  if (event.request.userAttributes['custom:tennant'] === undefined) {
    const tenantId = crypto.randomBytes(16).toString('hex');
  } else {
    const tenantId = event.request.userAttributes['custom:tennant'];
  }
  const groupParams = {
    GroupName: tenantId,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: tenantId,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoIdentityServiceProvider.send(new GetGroupCommand(groupParams));
  } catch (e) {
    await cognitoIdentityServiceProvider.send(
      new CreateGroupCommand(groupParams),
    );
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoIdentityServiceProvider.send(
    new AdminAddUserToGroupCommand(addUserParams),
  );

  return event;
};
