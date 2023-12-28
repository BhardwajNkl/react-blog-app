import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ReduxFiles/BlogStore';
import { TitleContextProvider } from './ContextFiles/ContextProvider'
import { HomePage } from './pages/HomePage';
import { NewPostPage } from './pages/NewPostPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { EditPostPage } from './pages/EditPostPage';
import './styles/appRouter.css'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Provider store={store}>
                        <TitleContextProvider>
                            <HomePage />
                        </TitleContextProvider>
                    </Provider>}>
                </Route>
                <Route path='/new' element={<Provider store={store}>
                    <NewPostPage /></Provider>}>
                </Route>
                <Route path='/post/:postId' element={<Provider store={store}>
                    <PostDetailPage /></Provider>}>
                </Route>
                <Route path='/update/:postId' element={<Provider store={store}>
                    <EditPostPage /></Provider>}>
                </Route>
                <Route path='*' element={<h2>Not Found page</h2>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

