import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOut, AccountOutWithPassword


class UserAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,             #can get account based on email OR username OR whatever other unique identifier
        accounts: AccountQueries,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return accounts.get(email)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        # Return the accounts. That's it.
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut): #Must use this if we do not have an email on our account model
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return account.username, AccountOut(**account.dict())


authenticator = UserAuthenticator(os.environ["SIGNING_KEY"])
