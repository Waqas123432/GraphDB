import SettingsHeading from "src/components/SettingsHeading";
import CreateDatabaseModal from "src/components/CreateDatabaseModal";
import { useState } from "react";
export default function Settings() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showDatabaseModal = () => setIsModalOpen(true);
  const closeDatabaseModal = () => setIsModalOpen(false);

  return (
    <div className="flex gap-10 flex-col">
      <div>
        <SettingsHeading
          label="Active Database information"
          action={showDatabaseModal}
        />
        <div className="bg-white border border-[#E9EFF4] font-worksans text-[#3A3A49] h-44 p-4 mt-4">
          <p>There are no databases associated with this management tool.</p>
          <p>
            Click the button above to create a new database or connect to an
            existing database.
          </p>
        </div>
      </div>
      <div>
        <SettingsHeading label="Repository" action={showDatabaseModal} />
      </div>
      {isModalOpen && <CreateDatabaseModal closeAction={closeDatabaseModal} />}
    </div>
  );
}
