import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountsRepo
from models import AccountOut, AccountOutWithHashedPassword


class MyAuthenticator(
    Authenticator
):  # Handles Login. Inheriting extra functionality Autheticator from jwtdown
    async def get_account_data(
        self,
        username: str,
        accounts: AccountsRepo,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountsRepo = Depends(),
    ):
        # Return the accounts. That's it.
        return accounts

    def get_hashed_password(
        self, account: AccountOutWithHashedPassword
    ):  # this is being handled internally
        # Return the encrypted password value from your
        # account object
        return account.hashed_password

    def get_account_data_for_cookie(
        self, account: AccountOut
    ):  # this is what we are giving to frontend
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return account.username, AccountOut(**account.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
