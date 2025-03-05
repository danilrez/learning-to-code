CREATE OR REPLACE FUNCTION log_documents() RETURNS TRIGGER AS $log_documents$
  BEGIN
    CASE TG_OP
      WHEN 'INSERT' THEN
        INSERT INTO documents_changelog (document_id, old_data, new_data) VALUES (new.id, NULL, new.data);
      WHEN 'UPDATE' THEN
        INSERT INTO documents_changelog (document_id, old_data, new_data) VALUES (old.id, old.data, new.data);
      WHEN 'DELETE' THEN
        INSERT INTO documents_changelog (document_id, old_data, new_data) VALUES (old.id, old.data, NULL);
    END CASE;
    RETURN NULL;
  END;
$log_documents$ LANGUAGE plpgsql;

CREATE TRIGGER logs
AFTER INSERT OR UPDATE OR DELETE ON documents
FOR EACH ROW EXECUTE PROCEDURE log_documents();