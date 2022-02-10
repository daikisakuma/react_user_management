import React, { ChangeEvent, useState } from 'react';
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: VFC = memo(() => {
    const { login, loading } = useAuth();

    const [userId, setUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

    const onClickLogin = () => login(userId);

    return (
        <>

        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">
                    ユーザー管理アプリ
                </Heading>
                <Divider my={4}/>
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
                    <PrimaryButton
                        disabled={userId === ""}
                        loading={loading}
                        onClick={onClickLogin}
                    >
                        ログイン
                    </PrimaryButton>
                </Stack>
            </Box>
        </Flex>

            {/* <Link to="/react_user_management/react_user_management/home">Home</Link>
            <br />
            <Link to="/react_user_management/react_user_management/home/user_management">ユーザー管理ページ</Link>
            <br />
            <Link to="/react_user_management/react_user_management/home/setting">設定ページ</Link> */}
        </>
    );
});
