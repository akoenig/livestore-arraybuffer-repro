import { Button } from "@/components/ui/button.tsx";
import Logo from "/logo/256x256.png";

import { core } from "@/core/index.ts";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleCreateProject() {
    const projectId = core.useCases.createProjectId();

    return navigate(`/${projectId}`);
  }

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-[fafafa]">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={Logo} className="w-20 h-20" alt="An ugly logo" />
          <h1 className="font-medium text-sm">
            An app with an ugly <a href="https://www.logoshaper.co/">logo</a>
          </h1>
        </div>
        <Button size="sm" onClick={handleCreateProject}>
          Create Project
        </Button>
      </div>
    </main>
  );
}
