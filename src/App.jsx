import { RouterProvider } from "react-router";
import { router } from "./App.route";
import { AuthProvider } from "./features/auth/auth.context";
import "./features/shared/global.scss";
import { PostContextProvider } from "./features/post/post.context";

function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
}

export default App;
