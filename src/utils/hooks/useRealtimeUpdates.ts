import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";

const useRealtimeUpdates = (onUpdate: () => void) => {
  useEffect(() => {
    const subscription = supabase
      .channel("*")
      .on("postgres_changes", { event: "*", schema: "public", table: "contents" }, () => {
        console.log("データベース変更を検知しました！");
        onUpdate();
      })
      .subscribe();

       return () => {
        supabase.removeChannel(subscription); // サブスクリプションの解除
    };


  }, [onUpdate]);
};

export default useRealtimeUpdates;